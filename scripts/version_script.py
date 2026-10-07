#!/usr/bin/env python3
"""Atualiza a versão do JavaScript nas páginas para invalidar caches antigos."""

import argparse
import hashlib
from pathlib import Path
import re


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Verifica sem alterar arquivos')
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    version = hashlib.sha256((root / 'script.js').read_bytes()).hexdigest()[:12]
    pages = [root / 'index.html', root / '404.html', *sorted((root / 'projetos').rglob('*.html'))]
    pattern = re.compile(r'(src="[^"]*script\.js)(?:\?v=[a-f0-9]+)?(")')
    outdated = []
    for page in pages:
        content = page.read_text()
        updated, count = pattern.subn(lambda m: f'{m[1]}?v={version}{m[2]}', content)
        if count != 1:
            raise SystemExit(f'{page.relative_to(root)}: esperado um carregamento de script.js')
        if updated != content:
            outdated.append(str(page.relative_to(root)))
            if not args.check:
                page.write_text(updated)
    if args.check and outdated:
        raise SystemExit('Versão desatualizada: ' + ', '.join(outdated) + '\nExecute python3 scripts/version_script.py')
    print(f'JavaScript {version}: {len(pages)} páginas verificadas' if args.check else f'JavaScript {version}: {len(outdated)} páginas atualizadas')


if __name__ == '__main__':
    main()
