#!/usr/bin/env python3
"""Generate ATS-friendly PDF, text and LaTeX variants from one factual base.

PDFs use ReportLab (no LaTeX runtime required). LaTeX is an alternative source,
generated from the same ordered paragraphs. Never edit generated assets directly.
"""
import argparse
from html import escape
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
PROFILE = json.loads((ROOT / 'data/profile.json').read_text())
VARIANTS = [('ml', 'pt'), ('ds', 'pt'), ('ml', 'en'), ('ds', 'en'), ('applied-ai', 'en')]


def paragraphs(role, lang):
    pt = lang == 'pt'
    title = {'ml': 'Machine Learning Engineer / Applied ML', 'ds': 'Data Scientist',
             'applied-ai': 'Applied AI / Research Engineer'}[role]
    rows = [('name', PROFILE['name']), ('headline', title),
            ('body', 'Fortaleza, CE, Brasil · Remoto' if pt else 'Fortaleza, Brazil · Remote'),
            ('body', PROFILE['email'] + ' | ' + PROFILE['phone']),
            ('body', PROFILE['linkedin'] + ' | ' + PROFILE['github']),
            ('body', PROFILE['portfolio'] + ('en/' if not pt else ''))]
    summaries = {
        ('ml', 'pt'): 'Bacharel em Ciência da Computação com atuação em P&D de ML multimodal, representações e integração experimental de LLMs. Desenvolvo sistemas com APIs, busca vetorial e avaliação de desempenho em CPU.',
        ('ml', 'en'): 'Computer Science graduate working on multimodal ML research, representations, and experimental LLM integration. Builds ML systems with APIs, vector search, and measured CPU performance.',
        ('ds', 'pt'): 'Bacharel em Ciência da Computação com experiência em P&D de Machine Learning, avaliação de modelos e experimentação. Combino pesquisa em otimização, análise quantitativa e implementação de sistemas para testar hipóteses.',
        ('ds', 'en'): 'Computer Science graduate with applied ML research, model evaluation, and experimentation experience. Combines optimization research, quantitative analysis, and system implementation to investigate hypotheses.',
        ('applied-ai', 'en'): 'Computer Science graduate contributing to multimodal ML research, semantic representations, and experimental LLM integration. Experience spans research software, model evaluation, and algorithmic optimization.'
    }
    rows += [('section', 'Resumo Profissional' if pt else 'Professional Summary'), ('body', summaries[(role, lang)]),
             ('section', 'Experiência Profissional' if pt else 'Professional Experience'),
             ('entry', 'Tieta.ai · P&D em Machine Learning · Remoto' if pt else 'Tieta.ai · Machine Learning R&D · Remote'),
             ('body', 'Pesquisador de P&D: 07/2026–presente | Pesquisador de ML, CNPq RHAE (meio período): 04/2025–06/2026' if pt else 'R&D Researcher: Jul 2026–present | ML Researcher, CNPq RHAE Fellow (part-time): Apr 2025–Jun 2026'),
             ('body', PROFILE['tieta']['summary_' + lang])]
    bullets = PROFILE['tieta']['bullets_' + lang]
    order = [3, 1, 0, 2] if role == 'ds' else ([1, 0, 2, 3] if role == 'applied-ai' else [0, 1, 2, 3])
    rows += [('bullet', bullets[i]) for i in order]
    rows += [('entry', 'Consultoria autônoma · Instituição de ensino · 03/2026–presente' if pt else 'Independent consulting · Educational institution · Mar 2026–present'),
             ('body', 'Desenvolvedor Full Stack e Engenheiro de ML · Face Clock Evoluir' if pt else 'Full Stack Developer and ML Engineer · Face Clock Evoluir'),
             ('body', 'v1.3.0-rc.3: candidata a piloto institucional acompanhado, implantada em ambiente de testes.' if pt else 'v1.3.0-rc.3: supervised institutional pilot candidate deployed to a test environment.')]
    if role == 'ds':
        rows += [('bullet', 'Comparei baselines clássicos, neurais e híbridos para triagem documental: F1 0,778 e acurácia 0,875 no teste reservado de 64 documentos; amostra pequena limita generalização.' if pt else 'Compared classical, neural, and hybrid document-triage baselines: F1 0.778 and accuracy 0.875 on a held-out test of 64 documents; the small sample limits generalization.')]
    else:
        rows += [('bullet', 'Desenvolvi identificação facial 1:N, APIs FastAPI e persistência PostgreSQL/pgvector para servidor CPU-only; corrigi falhas de extração sob concorrência.' if pt else 'Built 1:N facial identification, FastAPI APIs, and PostgreSQL/pgvector persistence for a CPU-only server; fixed concurrent extraction failures.')]
    rows += [('bullet', 'Recalibrei o limiar facial: desconhecidos aceitos passaram de 45,4% a 0,2% em teste controlado. Calibração com a população da instituição permanece pendente.' if pt else 'Recalibrated the facial threshold: unknown-person acceptance fell from 45.4% to 0.2% in a controlled test. Calibration on the institution’s population remains pending.')]
    if role != 'ds':
        rows += [('bullet', 'Usei benchmarks para manter busca exata e reduzir frames; migrei o classificador documental para ONNX Runtime, verificando paridade de decisões no teste reservado.' if pt else 'Used benchmarks to retain exact search and reduce frames; migrated document-classifier inference to ONNX Runtime with decision-parity checks on the held-out test.')]
    rows += [('section', 'Pesquisa e Projetos' if pt else 'Research and Projects'),
             ('entry', 'Dominação Romana Tripla em Grafos · TCC · 2024–2025' if pt else 'Triple Roman Domination in Graphs · Undergraduate thesis · 2024–2025'),
             ('bullet', 'Identifiquei contraexemplo de uma formulação PLI publicada e implementei formulação corrigida, GA e ACO (C++, Python/Pyomo). Avaliei 362 grafos; uma execução por instância limita as conclusões.' if pt else 'Identified a counterexample to a published ILP formulation; implemented a corrected model, GA, and ACO (C++, Python/Pyomo). Evaluated 362 graphs; one run per instance limits conclusions.')]
    if role == 'ds':
        rows += [('entry', 'Auxílio Emergencial · Em desenvolvimento' if pt else 'Brazilian Emergency Aid · In development'),
                 ('bullet', 'Implementei ingestão em blocos com Pandas e PostgreSQL COPY. Profiling em recortes de até 5 milhões de linhas mostrou memória crescente; a correção por staging ainda não foi validada.' if pt else 'Implemented chunked Pandas and PostgreSQL COPY ingestion. Profiling on subsets up to 5 million rows exposed growing memory use; the staging-based fix remains unvalidated.')]
    rows += [('section', 'Competências Técnicas' if pt else 'Technical Skills')]
    for key in (['evaluation', 'ml', 'systems'] if role == 'ds' else ['ml', 'systems', 'evaluation']):
        rows.append(('body', PROFILE['skills'][key][lang]))
    rows += [('section', 'Formação Acadêmica' if pt else 'Education'),
             ('entry', 'Bacharelado em Ciência da Computação · Universidade Federal do Ceará (UFC), Quixadá' if pt else 'B.Sc. in Computer Science · Federal University of Ceará (UFC), Quixadá, Brazil'),
             ('body', '2021–19/08/2026 · TCC defendido em 02/2025.' if pt else '2021–19 Aug 2026 · Thesis defended in Feb 2025.'),
             ('section', 'Idiomas' if pt else 'Languages'),
             ('body', 'Português nativo. Inglês: boa comunicação; leitura técnica fluente de artigos e documentação.' if pt else 'Native Portuguese. English: good communication; fluent technical reading of papers and documentation.')]
    return rows


def tex_escape(text):
    return ''.join({'\\': r'\textbackslash{}', '&': r'\&', '%': r'\%', '$': r'\$',
                    '#': r'\#', '_': r'\_', '{': r'\{', '}': r'\}'}.get(c, c) for c in text)


def build(role, lang, pdf=True):
    rows = paragraphs(role, lang)
    stem = ROOT / f'assets/israel-cv-{role}-{lang}'
    stem.with_suffix('.txt').write_text('\n'.join(('- ' if k == 'bullet' else '') + t for k, t in rows) + '\n')
    tex = [r'\documentclass[a4paper,10pt]{article}', r'\usepackage[margin=1.2cm]{geometry}',
           r'\usepackage[T1]{fontenc}', r'\usepackage[utf8]{inputenc}', r'\usepackage{lmodern}',
           r'\usepackage[hidelinks]{hyperref}', r'\pagestyle{empty}', r'\setlength{\parindent}{0pt}',
           r'\setlength{\parskip}{2pt}', r'\begin{document}']
    for kind, text in rows:
        value = tex_escape(text)
        if kind == 'section': value = r'\vspace{5pt}\textbf{' + value + '}'
        elif kind in ('name', 'headline', 'entry'): value = r'\textbf{' + value + '}'
        elif kind == 'bullet': value = r'\hangindent=1em\textbullet\ ' + value
        tex.append(value + r'\par')
    stem.with_suffix('.tex').write_text('\n'.join(tex + [r'\end{document}', '']))
    if not pdf:
        return
    from reportlab.lib import colors
    from reportlab.lib.enums import TA_LEFT
    from reportlab.lib.styles import ParagraphStyle
    from reportlab.lib.pagesizes import A4
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.platypus import SimpleDocTemplate, Paragraph
    font_dir = Path('/usr/share/fonts/truetype/dejavu')
    pdfmetrics.registerFont(TTFont('CV', str(font_dir / 'DejaVuSans.ttf')))
    pdfmetrics.registerFont(TTFont('CVBold', str(font_dir / 'DejaVuSans-Bold.ttf')))
    sizes = {'name': 17, 'headline': 11, 'section': 10.5, 'entry': 9.5, 'body': 9.5, 'bullet': 9.5}
    styles = {kind: ParagraphStyle(kind, fontName='CVBold' if kind in ('name', 'headline', 'section', 'entry') else 'CV',
              fontSize=size, leading=size * 1.29, spaceBefore=7 if kind == 'section' else (3 if kind == 'entry' else 0),
              spaceAfter=2, alignment=TA_LEFT, textColor=colors.HexColor('#17252b'),
              leftIndent=9 if kind == 'bullet' else 0, firstLineIndent=-9 if kind == 'bullet' else 0)
              for kind, size in sizes.items()}
    story = []
    for kind, text in rows:
        value = escape(text)
        if kind == 'body' and text.startswith('https://'):
            value = ' | '.join(f'<link href="{escape(url)}">{escape(url)}</link>' for url in text.split(' | '))
        story.append(Paragraph(('• ' if kind == 'bullet' else '') + value, styles[kind]))
    document = SimpleDocTemplate(str(stem.with_suffix('.pdf')), pagesize=A4, leftMargin=32, rightMargin=32,
                                topMargin=26, bottomMargin=26, title=PROFILE['name'] + ' — ' + rows[1][1],
                                author=PROFILE['name'], pageCompression=1, invariant=1)
    document.build(story)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--text-only', action='store_true')
    args = parser.parse_args()
    for role, lang in VARIANTS:
        build(role, lang, not args.text_only)
    for lang, old in [('pt', 'portugues'), ('en', 'english')]:
        for suffix in ('.tex', '.txt', '.pdf'):
            if suffix == '.pdf' and args.text_only: continue
            source = ROOT / f'assets/israel-cv-ml-{lang}{suffix}'
            target = ROOT / f'assets/israel-cv-{old}{suffix}'
            if lang == 'pt' and suffix == '.pdf': target = ROOT / 'assets/israel_cv_pt.pdf'
            shutil.copyfile(source, target)
        if not args.text_only:
            shutil.copyfile(ROOT / 'assets/israel-cv-ml-en.pdf', ROOT / 'assets/israel_cv_en.pdf')
    print(f'Generated {len(VARIANTS)} résumé variants and compatibility aliases')


if __name__ == '__main__':
    main()
