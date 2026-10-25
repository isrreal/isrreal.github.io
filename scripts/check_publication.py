#!/usr/bin/env python3
"""Check static language routes, public disclosure boundaries and résumé parity."""
import json
from pathlib import Path
import re
import subprocess
import unicodedata
from urllib.parse import urlsplit

from bs4 import BeautifulSoup
from build_resumes import paragraphs, VARIANTS

ROOT = Path(__file__).resolve().parent.parent
BASE = 'https://israelsouza.speculummaius.com.br'


def normalized(value):
    return re.sub(r'\s+', '', unicodedata.normalize('NFKC', value)).replace('•','')


def main():
    failures = []
    paths = [ROOT/'index.html', ROOT/'404.html', *sorted((ROOT/'projetos').rglob('*.html')), *sorted((ROOT/'en').rglob('*.html'))]
    for path in paths:
        soup = BeautifulSoup(path.read_text(), 'html.parser')
        ids = [tag['id'] for tag in soup.select('[id]')]
        if len(ids) != len(set(ids)): failures.append(f'{path}: duplicate IDs')
        if len(soup.select('h1')) != 1: failures.append(f'{path}: expected one H1')
        if soup.select('[data-en] [data-en]'): failures.append(f'{path}: nested translation')
        if soup.select('img:not([alt])'): failures.append(f'{path}: image without alt')
        expected_lang = 'en' if 'en' in path.relative_to(ROOT).parts else 'pt-BR'
        if soup.html.get('lang') != expected_lang: failures.append(f'{path}: wrong static language')
        alternates = {tag.get('hreflang'):tag['href'] for tag in soup.select('link[rel="alternate"]')}
        if set(alternates) != {'pt-BR','en','x-default'}: failures.append(f'{path}: missing hreflang')
        for url in alternates.values():
            target = ROOT / urlsplit(url).path.lstrip('/')
            if target.is_dir(): target /= 'index.html'
            if not target.is_file(): failures.append(f'{path}: missing language route {url}')
        switch = soup.select_one('a.language-toggle[href]')
        if not switch: failures.append(f'{path}: missing no-JS language link')
        if not soup.select_one('meta[name="description"]').get('content'): failures.append(f'{path}: empty description')
        for script in soup.select('script[type="application/ld+json"]'):
            json.loads(script.string)
    profile = json.loads((ROOT/'data/profile.json').read_text())
    sensitive = re.compile(r'\b(?:DSPy|Mixture of Experts|gating|cross.attention|RelRep|FAISS)\b',re.I)
    for lang, home in [('pt',ROOT/'index.html'),('en',ROOT/'en/index.html')]:
        tieta = BeautifulSoup(home.read_text(),'html.parser').select_one('#tieta')
        if sensitive.search(tieta.get_text()): failures.append(f'{home}: sensitive detail linked to Tieta')
        if profile['tieta']['summary_'+lang] not in tieta.get_text():
            failures.append(f'{home}: canonical Tieta summary differs')
    for role,lang in VARIANTS:
        stem = ROOT/f'assets/israel-cv-{role}-{lang}'
        expected = paragraphs(role,lang)
        extracted = subprocess.check_output(['pdftotext','-enc','UTF-8',str(stem.with_suffix('.pdf')),'-'],text=True)
        cursor = 0
        content = normalized(extracted)
        for kind, paragraph in expected:
            position = content.find(normalized(paragraph),cursor)
            if position < 0:
                failures.append(f'{stem.name}: PDF missing/reordered paragraph {paragraph[:70]}')
            else: cursor = position + len(normalized(paragraph))
        info = subprocess.check_output(['pdfinfo',str(stem.with_suffix('.pdf'))],text=True)
        if not re.search(r'Pages:\s+1\b',info): failures.append(f'{stem.name}: expected one page')
        if sensitive.search(extracted): failures.append(f'{stem.name}: sensitive keyword in CV')
        source = stem.with_suffix('.txt').read_text()
        for kind, paragraph in expected:
            if paragraph not in source: failures.append(f'{stem.name}: plain text differs')
    for lang,alias in [('pt','portugues'),('en','english')]:
        for extension in ('tex','txt'):
            if (ROOT/f'assets/israel-cv-{alias}.{extension}').read_bytes() != (ROOT/f'assets/israel-cv-ml-{lang}.{extension}').read_bytes():
                failures.append(f'{alias}: compatibility source differs')
        legacy = ROOT/('assets/israel_cv_pt.pdf' if lang=='pt' else 'assets/israel-cv-english.pdf')
        if legacy.read_bytes() != (ROOT/f'assets/israel-cv-ml-{lang}.pdf').read_bytes(): failures.append(f'{alias}: legacy PDF differs')
    for filename in ('tieta-public-disclosure-review.md','tieta-disclosure-request.md'):
        result = subprocess.run(['git','check-ignore','-q',str(ROOT/'docs'/filename)])
        if result.returncode != 0: failures.append(f'{filename}: private draft must remain gitignored')
    if '  - docs' not in (ROOT/'_config.yml').read_text(): failures.append('Review documents must be excluded from Pages')
    if failures: raise SystemExit('\n'.join(failures))
    print(f'OK: {len(paths)} static pages, five single-page PDFs, extraction order, aliases and disclosure boundaries')


if __name__ == '__main__':
    main()
