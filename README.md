# Portfólio — Israel Souza Ferreira

Site estático publicado em [israelsouza.speculummaius.com.br](https://israelsouza.speculummaius.com.br/), sem framework nem
etapa de build: HTML, CSS e JavaScript servidos direto pelo GitHub Pages.

## Estrutura

```
index.html                                  página inicial
404.html                                    página de erro
styles.css                                  folha de estilo única, com tema claro e escuro
script.js                                   tema, idioma, menu e componentes interativos
projetos/face-clock-evoluir/                estudo de caso + página técnica
projetos/dominacao-romana-tripla/           estudo de caso + página técnica
projetos/auxilio-emergencial/               ingestão + experimentos de memória
assets/                                     currículos (LaTeX e PDF), imagens e ícones
```

## Como rodar localmente

Abrir `index.html` no navegador já funciona. Para que os caminhos absolutos das páginas
de erro e do sitemap se comportem como em produção, prefira servir a pasta:

```bash
python3 -m http.server 8000
```

## Idiomas e fontes de conteúdo

PT usa `/` e `/projetos/...`; EN usa `/en/` e `/en/projetos/...`. As duas
versões entregam conteúdo completo sem JavaScript, com canonical próprio e
hreflang recíproco. O idioma vem da URL; o seletor é um link acessível e preserva
UTM e âncora quando JavaScript está disponível.

- HTML em português e `data-en`: conteúdo das páginas e traduções novas.
- `data/translations.json`: traduções legadas por seletor e metadados ingleses.
- `data/profile.json`: descrição pública e bullets da Tieta compartilhados pela home e CVs.
- `data/facts.yaml`: fatos canônicos e lacunas dos benchmarks do Face Clock.
- `scripts/build_resumes.py`: seleção/ordem de evidências e apresentação dos currículos.
- `en/` e o bloco `englishPages` de `script.js`: gerados; não editar diretamente.

Não coloque `data-en` dentro de outro `data-en`: substituir o pai remove os filhos.
Rótulos usam `data-en-aria-label`, `data-en-alt`, `data-en-title` e
`data-en-placeholder`. Componentes dinâmicos recebem `portfolio:languagechange`.

A publicação continua estática, sem framework nem dependências de runtime.
As ferramentas abaixo são apenas de autoria/QA. Em ambiente Python virtual:

```bash
python3 -m pip install -r scripts/requirements-dev.txt
python3 scripts/build_resumes.py
python3 scripts/build_site.py
python3 scripts/version_script.py
python3 scripts/build_site.py
```

A última geração propaga os hashes de CSS/JS/PDF para o HTML inglês. Verifique
com `python3 scripts/build_site.py --check` e `python3 scripts/version_script.py --check`.
Os documentos de revisão de confidencialidade em `docs/tieta-*.md` são privados,
ignorados pelo Git e excluídos do GitHub Pages por `_config.yml`. O PDF interno
fornecido pelo autor nunca foi copiado para este repositório. `robots.txt` não é
controle de acesso: mantenha essas minutas fora de qualquer upload estático direto.

A navegação segue experiência → projeto → evidências técnicas → documentação/código.
Registros extensos usam `<details>`; âncoras revelam automaticamente o registro.
Resultados devem conter comparação, interpretação e limite.

## Métricas de visitas

A instalação existente de [Plausible Analytics](https://plausible.io/) foi mantida,
com suporte a eventos personalizados. O script usa o domínio
`israelsouza.speculummaius.com.br`; não há contador público. Os eventos são:
`project_open`, `technical_evidence_open`, `cv_open`, `cv_download`, `email_click`,
`linkedin_click` e `language_change`. As propriedades enviam apenas idioma, função
ou identificador de projeto/seção; não enviam endereço de e-mail nem destino pessoal.
UTMs são propagadas apenas na navegação interna de páginas.

O titular precisa confirmar a instalação e criar os objetivos de mesmo nome no
painel da Plausible. Instrumentação local não comprova recebimento no serviço.
Consulte a [documentação de eventos](https://plausible.io/docs/custom-event-goals).
O QA de navegador bloqueia requisições externas e simula o coletor.

## Currículos

Cinco versões de uma página, uma coluna, fontes incorporadas e texto selecionável:

| Perfil | Português | Inglês |
| --- | --- | --- |
| Machine Learning Engineer / Applied ML | `assets/israel-cv-ml-pt.pdf` | `assets/israel-cv-ml-en.pdf` |
| Data Scientist | `assets/israel-cv-ds-pt.pdf` | `assets/israel-cv-ds-en.pdf` |
| Applied AI / Research Engineer | — | `assets/israel-cv-applied-ai-en.pdf` |

Cada PDF tem `.txt` e `.tex` equivalentes. O gerador usa ReportLab para os PDFs;
LaTeX é fonte alternativa gerada da mesma sequência de parágrafos, não o motor
utilizado para os PDFs atuais. A fonte padrão é DejaVu Sans de
`/usr/share/fonts/truetype/dejavu/`. Não é necessário instalar TeX.
Os nomes antigos `israel_cv_pt.pdf`, `israel_cv_en.pdf`, `israel-cv-english.pdf`
e fontes `israel-cv-portugues/english` permanecem como aliases da versão ML.

O parser check compara cada parágrafo esperado com `pdftotext`, na ordem, e
confere uma página via `pdfinfo`. Isso facilita inspeção ATS; não promete aprovação
em sistemas de recrutamento. Evite editar PDF/TXT/TeX individualmente.

A graduação começou em 2021, terminou em 19/08/2026 e não se confunde com a defesa
do TCC em 02/2025. Os cargos da Tieta mantêm os períodos 04/2025–06/2026 e
07/2026–presente; contribuições colaborativas descrevem o conjunto da experiência,
sem atribuir o projeto do relatório exclusivamente ao cargo atual.

## Verificações antes de publicar

Os cálculos estatísticos ficam em `scripts/stats_ci.py` e exigem contagens verificadas ou
predições salvas por documento. Execute `python3 -m unittest discover -s scripts -p 'test_*.py'`.
Use `python3 scripts/stats_ci.py --help` para os formatos CSV. Não publique McNemar sem
os pares por documento nem limite de FAR sem o número de comparações impostoras e o
tamanho da galeria.

`data/facts.yaml` guarda os fatos canônicos confirmados e as lacunas explícitas. Execute
`python3 scripts/check_consistency.py` para conferir metadados, links internos, paridade
numérica PT/EN e rótulos de tecnologias históricas. Para instalar a verificação local
antes de cada commit, rode `git config core.hooksPath .githooks`; o hook também executa
os testes da pasta `scripts/` e confere as versões de cache dos arquivos publicados.
O repositório público complementar pode ser preparado localmente em
`.related/face-clock-evoluir-public/` (ignorado por este Git), sem push automático.

Não há CI remoto configurado. Verificações locais:

```bash
python3 -m unittest discover -s scripts -p 'test_*.py'
python3 scripts/check_consistency.py
python3 scripts/check_publication.py
python3 scripts/build_site.py --check
python3 scripts/version_script.py --check
git diff --check
```

Para QA visual, sirva a pasta na porta 8765 e execute, com Chromium/Brave instalado:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
# Em outro terminal:
python3 scripts/browser_qa.py --browser /opt/brave.com/brave/brave
```

O QA cobre 16 páginas PT/EN a 360 e 1440 px, capturas adicionais a 320 px,
disclosures abertos, erros JS, teclado, menu, UTM/âncoras, links de CV, eventos
simulados, demonstração do TCC e inglês sem JavaScript. As capturas ficam em `/tmp`.

O mínimo a cada alteração:

- todos os arquivos referenciados existem (`src`, `href`, `link`);
- âncoras internas (`#secao`) apontam para IDs que existem;
- PT → EN → PT restaura os textos; os links de currículo acompanham o idioma;
- disclosures funcionam por teclado e âncoras abrem o conteúdo fechado;
- não há overflow horizontal global em celular, com detalhes abertos e fechados;
- `pdftotext` preserva nome, contatos, curso, empregador, cargo e período em ordem;
- números repetidos em mais de uma página continuam coerentes entre si.
