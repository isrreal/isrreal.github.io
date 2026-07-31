# Portfólio — Israel Souza Ferreira

Site estático publicado em [isrreal.github.io](https://isrreal.github.io/), sem framework nem
etapa de build: HTML, CSS e JavaScript servidos direto pelo GitHub Pages.

## Estrutura

```
index.html                                  página inicial
404.html                                    página de erro
styles.css                                  folha de estilo única, com tema claro e escuro
script.js                                   tema, idioma, menu e componentes interativos
projetos/face-clock-evoluir/                estudo de caso + página técnica
projetos/dominacao-romana-tripla/           estudo de caso + página técnica
assets/                                     currículos (LaTeX e PDF), imagens e ícones
```

## Como rodar localmente

Abrir `index.html` no navegador já funciona. Para que os caminhos absolutos das páginas
de erro e do sitemap se comportem como em produção, prefira servir a pasta:

```bash
python3 -m http.server 8000
```

## Idiomas

O site é bilíngue (português e inglês). A tradução acontece no cliente: `script.js` mantém,
para cada página, uma tabela que mapeia seletores CSS para o texto em inglês, e o botão de
idioma troca o `innerHTML` desses elementos. A página é identificada pelo atributo
`data-page` no elemento `<html>`.

Consequência prática ao editar: **se você mudar a estrutura HTML de um trecho traduzido,
o seletor correspondente em `script.js` precisa acompanhar**, senão aquele trecho deixa de
ser traduzido silenciosamente.

## Currículos

Os PDFs em `assets/` são gerados a partir dos fontes LaTeX no mesmo diretório:

```bash
pdflatex -interaction=nonstopmode assets/israel-cv-portugues.tex
pdflatex -interaction=nonstopmode assets/israel-cv-english.tex
```

Cada idioma é publicado sob dois nomes (`israel_cv_pt.pdf` e `israel-cv-portugues.pdf`),
porque ambos já circulam em links externos. Ao regerar, atualize os dois.

## Verificações antes de publicar

Não há CI configurado. O mínimo recomendado a cada alteração:

- todos os arquivos referenciados existem (`src`, `href`, `link`);
- âncoras internas (`#secao`) apontam para IDs que existem;
- os seletores das tabelas de tradução ainda encontram elementos nas páginas;
- números repetidos em mais de uma página continuam coerentes entre si.
