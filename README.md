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

## Idiomas

O site é bilíngue (português e inglês). O HTML contém português como padrão e funciona
sem JavaScript. Nas páginas revisadas, cada trecho traduzido usa `data-en` com seu conteúdo
em inglês; o script preserva o português original e alterna os textos. Não coloque trechos
`data-en` dentro de outro trecho `data-en`, pois substituir o pai remove os filhos.

As páginas técnicas ainda mantêm parte das tabelas antigas de seletores em `script.js`.
Traduções inline têm prioridade. Ao alterar um trecho legado, atualize sua tradução ou migre
para `data-en`. Datas, unidades, denominadores e limitações devem coincidir nos dois idiomas.
Rótulos de acessibilidade e dicas usam `data-en-aria-label`, `data-en-alt`, `data-en-title`
e `data-en-placeholder`, mantendo o atributo original em português. Componentes dinâmicos
acompanham o evento `portfolio:languagechange`. Para botões de navegação, prefira seletores
pelo `href` em vez da posição, para que o texto continue associado ao destino correto.

Após alterar `styles.css`, `script.js` ou recompilar os currículos, execute `python3 scripts/version_script.py`.
O comando versiona o CSS, o JavaScript em todas as páginas e os links dos PDFs em português e inglês
a partir do conteúdo dos arquivos, para que o navegador carregue as traduções e os currículos
atuais em vez de reutilizar arquivos antigos em cache.
Verifique antes de publicar com `python3 scripts/version_script.py --check`.

A navegação segue apresentação → resumo do projeto → evidências técnicas → documentação/código.
Registros históricos extensos usam `<details>` nativo; links para âncoras revelam automaticamente
o registro correspondente. Resultados devem conter comparação, interpretação e limite.

## Métricas de visitas

O site carrega o script leve da [Plausible Analytics](https://plausible.io/) em todas as páginas.
Ele mede visualizações no painel externo; não há contador público no portfólio. Para ativá-lo,
crie uma conta na Plausible e cadastre `israelsouza.speculummaius.com.br` como site. O snippet
publicado usa esse domínio como identificador. Depois do deploy, valide a coleta pelo teste de
instalação da própria Plausible antes de usar os números.

## Currículos

Os fontes LaTeX e PDFs estão em `assets/`. Os currículos usam uma página, uma coluna, cargos e datas
em ordem linear, contatos visíveis e seções padronizadas. Isso facilita parsing; não promete aprovação em qualquer ATS.
A [documentação do Greenhouse](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse)
explica limitações com colunas, tabelas, imagens e cabeçalhos complexos.

Compile em diretório temporário, preservando a pasta pública livre de intermediários:

```bash
mkdir -p .cv-build
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=.cv-build assets/israel-cv-portugues.tex
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=.cv-build assets/israel-cv-english.tex
cp .cv-build/israel-cv-portugues.pdf assets/israel_cv_pt.pdf
cp .cv-build/israel-cv-english.pdf assets/israel-cv-english.pdf
cp assets/israel-cv-english.pdf assets/israel_cv_en.pdf
pdftotext assets/israel_cv_pt.pdf assets/israel-cv-portugues.txt
pdftotext assets/israel-cv-english.pdf assets/israel-cv-english.txt
python3 - <<'PY'
from pathlib import Path
import unicodedata
for name in ['portugues', 'english']:
    path = Path(f'assets/israel-cv-{name}.txt')
    path.write_text(unicodedata.normalize('NFKC', path.read_text()).replace('\f', '\n').strip() + '\n')
PY
```

Alternativa testada: `tectonic --outdir .cv-build assets/israel-cv-portugues.tex`, repetindo
para inglês e copiando os arquivos como acima. As versões `.txt` publicadas normalizam
ligaturas Unicode e removem separadores de página para facilitar a leitura do texto extraído.
O PDF em português usa apenas `assets/israel_cv_pt.pdf`. Em inglês, os dois nomes PDF são mantidos por compatibilidade com links externos; mantenha essas cópias idênticas.
O botão "Fonte LaTeX (.tex)" acompanha o idioma selecionado e permite baixar o arquivo usado
na compilação. Depois de copiar os PDFs, atualize seus links com `python3 scripts/version_script.py`.

A graduação começou em 2021 (mês não informado), terminou em 19/08/2026 e não se confunde
com a defesa do TCC em 02/2025. Datas da consultoria e das monitorias foram confirmadas pelo autor.
Mantenha esses períodos sincronizados entre HTML, LaTeX, PDFs e texto simples.

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

Não há CI configurado. O mínimo recomendado a cada alteração:

- todos os arquivos referenciados existem (`src`, `href`, `link`);
- âncoras internas (`#secao`) apontam para IDs que existem;
- PT → EN → PT restaura os textos; os links de currículo acompanham o idioma;
- disclosures funcionam por teclado e âncoras abrem o conteúdo fechado;
- não há overflow horizontal global em celular, com detalhes abertos e fechados;
- `pdftotext` preserva nome, contatos, curso, empregador, cargo e período em ordem;
- números repetidos em mais de uma página continuam coerentes entre si.
