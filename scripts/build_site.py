#!/usr/bin/env python3
"""Generate indexable English pages from PT sources and shared translations.

Requires beautifulsoup4. Public hosting remains buildless; run this only when
authoring. data/translations.json owns legacy English copy; inline data-en owns
new copy. data/profile.json owns the high-level Tieta description and CV base.
"""
import argparse
import hashlib
from html import escape
import json
from pathlib import Path
import re
from urllib.parse import urljoin, urlsplit
from xml.sax.saxutils import escape as xml_escape

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
BASE = 'https://israelsouza.speculummaius.com.br'


def fragment(element, text):
    element.clear()
    for node in list(BeautifulSoup(text, 'html.parser').contents):
        element.append(node.extract())


def route(path):
    value = '/' + path.relative_to(ROOT).as_posix()
    return value[:-10] if value.endswith('/index.html') else value


def translation_javascript(translations):
    lines = ['const englishPages = {']
    for key, value in translations.items():
        lines += [f'  {json.dumps(key)}: {{',
                  '    title: ' + json.dumps(value['title'], ensure_ascii=False) + ',',
                  '    description: ' + json.dumps(value['description'], ensure_ascii=False) + ',',
                  '    content: [']
        lines += ['      ' + json.dumps(row, ensure_ascii=False) + ',' for row in value['content']]
        lines += ['    ],', '    attributes: [']
        lines += ['      ' + json.dumps(row, ensure_ascii=False) + ',' for row in value.get('attributes', [])]
        lines += ['    ],', '  },']
    return '\n'.join(lines + ['};'])


def render_english(path, translations):
    soup = BeautifulSoup(path.read_text(), 'html.parser')
    translated = translations[soup.html['data-page']]
    # Same precedence as script.js: inline leaves override legacy selectors.
    for selector, value in translated['content']:
        node = soup.select_one(selector)
        if node and not node.has_attr('data-en') and not node.select_one('[data-en]'):
            fragment(node, value)
    for selector, attribute, value in translated.get('attributes', []):
        node = soup.select_one(selector)
        if node and node.has_attr(attribute): node[attribute] = value
    for node in soup.select('[data-en]'):
        fragment(node, node['data-en'])
    for attribute in ('aria-label', 'alt', 'title', 'placeholder'):
        for node in soup.select(f'[data-en-{attribute}]'):
            node[attribute] = node[f'data-en-{attribute}']
    soup.html['lang'] = 'en'
    soup.html['data-static-language'] = 'en'
    soup.title.string = translated['title']
    for selector, value in [
        ('meta[name="description"]', translated['description']),
        ('meta[property="og:title"]', translated['title']),
        ('meta[property="og:description"]', translated['description']),
        ('meta[property="og:locale"]', 'en_US'),
        ('meta[property="og:image:alt"]', 'Israel Souza Ferreira — machine learning, research, and engineering.')]:
        node = soup.select_one(selector)
        if node:
            node['content'] = value
    english_route = '/en' + route(path)
    soup.select_one('link[rel="canonical"]')['href'] = BASE + english_route
    soup.select_one('meta[property="og:url"]')['content'] = BASE + english_route
    language = soup.select_one('.language-toggle')
    language['href'] = route(path)
    language['hreflang'] = 'pt-BR'
    language['lang'] = 'pt-BR'
    language['aria-label'] = language['title'] = 'Switch to Portuguese'
    language.select_one('.language-code').string = 'PT'
    language.select_one('.language-label').string = 'Language'
    for node in soup.select('[href], [src]'):
        for attr in ('href', 'src'):
            value = node.get(attr)
            if not value or value.startswith('#') or urlsplit(value).scheme or value.startswith('//'): continue
            absolute = urlsplit(urljoin(BASE + route(path), value))
            resolved = absolute.path
            if attr == 'href' and node is not language and not node.has_attr('hreflang'):
                if resolved.endswith('.html') or resolved.endswith('/'):
                    if not resolved.startswith('/en/'):
                        resolved = '/en' + resolved
            node[attr] = resolved + ('?' + absolute.query if absolute.query else '') + ('#' + absolute.fragment if absolute.fragment else '')
    for code, name in [('pt', 'israel_cv_pt.pdf'), ('en', 'israel-cv-english.pdf')]:
        if soup.html.has_attr(f'data-resume-pdf-{code}'):
            pdf = ROOT / 'assets' / name
            soup.html[f'data-resume-pdf-{code}'] = f'/assets/{name}?v={hashlib.sha256(pdf.read_bytes()).hexdigest()[:12]}'
    for node in soup.select('[data-resume-action]'):
        action = node['data-resume-action']
        extension = {'text': 'txt', 'source': 'tex'}.get(action, 'pdf')
        node['href'] = '/assets/israel-cv-english.' + extension
        if extension == 'pdf':
            node['href'] += '?v=' + hashlib.sha256((ROOT/'assets/israel-cv-english.pdf').read_bytes()).hexdigest()[:12]
    for node in soup.select('script[type="application/ld+json"]'):
        data = json.loads(node.string)
        data['url'] = BASE + english_route
        node.string = '\n' + json.dumps(data, ensure_ascii=False, indent=2) + '\n'
    return '<!-- Generated by scripts/build_site.py; edit the PT source/data-en instead. -->\n' + str(soup) + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    generated = {}
    profile = json.loads((ROOT/'data/profile.json').read_text())
    home = (ROOT/'index.html').read_text()
    t = profile['tieta']
    # The home gets a short overview; the four detailed bullets belong in the CV.
    public_copy = f'<p data-en="{escape(t["summary_en"], quote=True)}">{t["summary_pt"]}</p>'
    home = re.sub(r'(<!-- TIETA:START -->).*?(<!-- TIETA:END -->)', lambda m:m[1]+'\n'+public_copy+'\n    '+m[2],home,flags=re.S)
    generated[ROOT/'index.html'] = home
    if not args.check: (ROOT/'index.html').write_text(home)
    translations = json.loads((ROOT/'data/translations.json').read_text())
    script = (ROOT/'script.js').read_text()
    script = re.sub(r'const englishPages = .*?\nconst inlineTranslations', lambda _: translation_javascript(translations)+'\n\nconst inlineTranslations',script,count=1,flags=re.S)
    generated[ROOT/'script.js'] = script
    pages = [ROOT/'index.html', *sorted((ROOT/'projetos').rglob('*.html')), ROOT/'404.html']
    for path in pages:
        generated[ROOT/'en'/path.relative_to(ROOT)] = render_english(path,translations)
    urls = [BASE+prefix+route(path) for path in pages if path.name != '404.html' for prefix in ('','/en')]
    generated[ROOT/'sitemap.xml'] = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>{xml_escape(url)}</loc></url>\n' for url in urls)+'</urlset>\n'
    stale = []
    for path, value in generated.items():
        if not path.exists() or path.read_text() != value:
            stale.append(str(path.relative_to(ROOT)))
            if not args.check:
                path.parent.mkdir(parents=True,exist_ok=True)
                path.write_text(value)
    if args.check and stale:
        raise SystemExit('Generated content differs: '+', '.join(stale))
    print(f'OK: {len(pages)} English pages and shared public copy')


if __name__ == '__main__':
    main()
