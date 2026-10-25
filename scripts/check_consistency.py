#!/usr/bin/env python3
"""Check source-backed portfolio facts, bilingual numbers, metadata and local links.

facts.yaml is JSON-compatible YAML so this checker needs only the standard library.
"""

import collections
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://israelsouza.speculummaius.com.br"
HISTORICAL = {"entrega", "progressao", "multi-stage"}
NUMBER = re.compile(r"(?<![\w])\d+(?:[.,]\d+)*")
BANNED = re.compile(r"InsightFace|512\s+(?:dimensões|dimensions)|CUDA", re.I)


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.pairs = []
        self.ids = set()
        self.links = []
        self.meta = {}
        self.legacy = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        marker = attrs.get("id", "")
        if marker:
            self.ids.add(marker)
        old = self.stack[-1]["historical"] if self.stack else False
        en = attrs.get("data-en", "")
        historical = old or marker in HISTORICAL
        if en and BANNED.search(en) and not (historical or re.search(r"hist[oó]ric|historical", en, re.I)):
            self.legacy.append(en[:100])
        self.stack.append({"tag": tag, "en": en, "pt": [], "historical": historical})
        for key in ("href", "src"):
            if attrs.get(key):
                self.links.append(attrs[key])
        if tag == "meta":
            self.meta[attrs.get("property") or attrs.get("name")] = attrs.get("content", "")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.meta["canonical"] = attrs.get("href", "")
        if tag in {"meta", "link", "img", "br", "hr", "input", "source"}:
            self.stack.pop()

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in {"meta", "link", "img", "br", "hr", "input", "source"}:
            self.handle_endtag(tag)

    def handle_data(self, data):
        if self.stack:
            for node in self.stack:
                if node["en"]:
                    node["pt"].append(data)
            if BANNED.search(data):
                node = self.stack[-1]
                context = data + " " + node["en"]
                if not (node["historical"] or re.search(r"hist[oó]ric|historical", context, re.I)):
                    self.legacy.append(data.strip()[:100])

    def handle_endtag(self, tag):
        while self.stack:
            node = self.stack.pop()
            if node["en"]:
                self.pairs.append((" ".join(node["pt"]), node["en"]))
            if node["tag"] == tag:
                break


def numbers(value):
    return collections.Counter(token.replace(",", ".") for token in NUMBER.findall(value))


def local_target(page_path, value):
    parsed = urlsplit(value)
    if parsed.scheme or parsed.netloc:
        if parsed.scheme != "https" or parsed.netloc != urlsplit(BASE).netloc:
            return None
        path = ROOT / unquote(parsed.path.lstrip("/"))
    else:
        path = ROOT / unquote(parsed.path.lstrip("/")) if parsed.path.startswith("/") else page_path.parent / unquote(parsed.path)
    if not parsed.path:
        path = page_path
    if path.is_dir():
        path /= "index.html"
    return path.resolve(), unquote(parsed.fragment)


def main():
    facts = json.loads((ROOT / "data/facts.yaml").read_text(encoding="utf-8"))
    failures = []
    pages = {}
    for path in sorted(ROOT.rglob("*.html")):
        if ".git" in path.parts:
            continue
        parser = Page()
        parser.feed(path.read_text(encoding="utf-8"))
        pages[path] = parser
        route = "/" if path == ROOT / "index.html" else "/" + str(path.relative_to(ROOT))
        if route.endswith("/index.html"):
            route = route[:-10]
        expected = BASE + route
        for key in ("canonical", "og:url"):
            if parser.meta.get(key) != expected:
                failures.append(f"{path}: {key} expected {expected}")
        image = parser.meta.get("twitter:image", "")
        if not image.startswith(BASE + "/") or not (ROOT / image[len(BASE) + 1:]).is_file():
            failures.append(f"{path}: invalid twitter:image")
        for pt, en in parser.pairs:
            if numbers(pt) != numbers(en):
                failures.append(f"{path}: PT/EN numbers differ: {pt[:55]!r} / {en[:55]!r}")
        for value in parser.legacy:
            failures.append(f"{path}: unlabelled historical technology: {value!r}")
        for link in parser.links:
            target = local_target(path, link)
            if target and not target[0].is_file():
                failures.append(f"{path}: missing local link {link}")
    for path, parser in pages.items():
        for link in parser.links:
            target = local_target(path, link)
            if target and target[1] and target[0] in pages and target[1] not in pages[target[0]].ids:
                failures.append(f"{path}: missing fragment {link}")
    face = ROOT / "projetos/face-clock-evoluir"
    summary = (face / "index.html").read_text(encoding="utf-8")
    detail = (face / "tecnico.html").read_text(encoding="utf-8")
    home = (ROOT / "index.html").read_text(encoding="utf-8")
    if any(not all(name in page for name in ("YuNet", "SFace")) for page in (home, summary, detail)):
        failures.append("current facial model missing from a Face Clock page")
    if str(facts["embedding_dimensions"]) not in detail:
        failures.append("embedding dimensions missing from technical page")
    for path in (ROOT / "index.html", face / "index.html", face / "tecnico.html"):
        content = path.read_text(encoding="utf-8").lower()
        if not all(word in content for word in facts["status_pt"].split()):
            failures.append(f"{path}: canonical Portuguese pilot status missing")
        if not all(word in content for word in facts["status_en"].split()):
            failures.append(f"{path}: canonical English pilot status missing")
    for value in (facts["version"], facts["hybrid_f1"].replace(".", ","), facts["hybrid_accuracy"].replace(".", ",")):
        if value not in summary + detail:
            failures.append(f"canonical value missing: {value}")
    split = "/".join(str(x) for x in facts["split_train_validation_test"])
    if split not in detail or f"{facts['hybrid_tp_fp'][0]}/20" not in detail:
        failures.append("benchmark split or true-positive count missing")
    for path in (ROOT / "assets/israel-cv-portugues.tex", ROOT / "assets/israel-cv-english.tex"):
        if facts["version"] not in path.read_text(encoding="utf-8"):
            failures.append(f"{path}: version differs")
    if facts["test_count"] is not None and str(facts["test_count"]) not in summary + detail:
        failures.append("test count missing")
    # Validate selector + translation together, independent of generated JS layout.
    translations = json.loads((ROOT / 'data/translations.json').read_text())
    for page_name, values in translations.items():
        for selector, text in values['content']:
            labelled = re.search(r"hist[oó]ric|historical", text, re.I)
            historical = any(f"#{x}" in selector for x in HISTORICAL) or '#tabela-progressao' in selector
            if BANNED.search(text) and not (labelled or historical):
                failures.append(f"{page_name}: unlabelled historical translation at {selector}")
    if failures:
        print("\n".join(failures))
        raise SystemExit(1)
    print(f"OK: {len(pages)} pages; metadata, bilingual numbers, historical labels and links")


if __name__ == "__main__":
    main()
