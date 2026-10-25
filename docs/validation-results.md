# Verificações locais — 25/10/2026

- 6 testes unitários existentes passaram.
- `check_consistency.py`: 16 páginas; metadados, links locais, âncoras,
  números PT/EN, tecnologias históricas e fatos canônicos passaram.
- `check_publication.py`: 16 páginas estáticas, hreflang, headings, traduções,
  fronteiras de divulgação, 5 PDFs de uma página, extração ordenada de cada
  parágrafo, fontes TXT e aliases legados passaram.
- `build_site.py --check`, `version_script.py --check`, compilação sintática
  Python, `node --check script.js` e `git diff --check` passaram.
- Navegador Brave/Chromium via Playwright: 32 combinações página/largura
  (16 páginas × 360/1440 px), com `<details>` fechados e abertos; nenhuma
  falha de JS ou overflow horizontal global nos cenários exercitados.
- Capturas adicionais da home PT/EN e páginas Face Clock a 320 px.
- Navegação por teclado, menu/Escape, PT→EN→PT, UTM/âncora, links de currículo,
  disclosures e demonstração do TCC verificados. Inglês verificado sem JavaScript.
- Sete eventos de analytics simulados, bloqueando requisições externas;
  ausência de endereço de e-mail nas propriedades testadas.
- Temas claro/escuro verificados; contraste dos botões primários acima de 4,5:1.
  Links de destaque no tema claro medidos em 4,83:1 ou mais sobre as superfícies
  principais. Preferência de movimento reduzido exercitada no navegador.
- PDFs renderizados para inspeção visual, além da verificação textual.
- Identificadores proprietários selecionados do PDF interno ausentes de 30
  arquivos de conteúdo público. Revisão manual adicional por categorias A/B/C
  registrada separadamente nos documentos privados.

## Limites

Não há framework, lint/typecheck de frontend ou build de aplicação configurados.
A geração de conteúdo estático e dos currículos foi executada com as ferramentas
de autoria; não foi introduzida dependência de runtime no site.

Não havia compilador LaTeX disponível. Os PDFs são gerados com ReportLab da mesma
base que gera TXT/TeX; os fontes LaTeX alternativos não foram compilados.
Ferramentas de QA foram instaladas apenas em `/tmp/portfolio-tools`.

A consulta web ao domínio autorizado não retornou a página neste ambiente.
O checkout local e o PDF indicado pelo autor foram as fontes de análise.
Links internos e arquivos de CV foram verificados; não se realizou auditoria
completa de disponibilidade de serviços externos.

Não foi feito push, deploy ou envio da minuta à Tieta. O recebimento efetivo dos
eventos Plausible depende de conferir a instalação e os objetivos no painel.
Não há avaliação de validade jurídica do NDA nem garantia de parsing por todo ATS.

Capturas locais: `/tmp/portfolio-qa/`. Checks reproduzíveis e comandos no README.
