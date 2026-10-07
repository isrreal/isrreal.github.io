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

Após alterar `script.js`, execute `python3 scripts/version_script.py`. O comando atualiza
a versão do arquivo em todas as páginas a partir do seu conteúdo, para que o navegador
carregue as traduções atuais em vez de reutilizar um JavaScript antigo em cache.
Verifique antes de publicar com `python3 scripts/version_script.py --check`.

A navegação segue apresentação → resumo do projeto → evidências técnicas → documentação/código.
Registros históricos extensos usam `<details>` nativo; links para âncoras revelam automaticamente
o registro correspondente. Resultados devem conter comparação, interpretação e limite.

## Currículos

Os fontes LaTeX e PDFs estão em `assets/`. Os currículos usam uma coluna, cargos e datas
em ordem linear, contatos visíveis e seções padronizadas. A versão atual tem duas páginas
para preservar legibilidade. Isso facilita parsing; não promete aprovação em qualquer ATS.
A [documentação do Greenhouse](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse)
explica limitações com colunas, tabelas, imagens e cabeçalhos complexos.

Compile em diretório temporário, preservando a pasta pública livre de intermediários:

```bash
mkdir -p .cv-build
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=.cv-build assets/israel-cv-portugues.tex
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=.cv-build assets/israel-cv-english.tex
cp .cv-build/israel-cv-portugues.pdf assets/israel-cv-portugues.pdf
cp .cv-build/israel-cv-english.pdf assets/israel-cv-english.pdf
cp assets/israel-cv-portugues.pdf assets/israel_cv_pt.pdf
cp assets/israel-cv-english.pdf assets/israel_cv_en.pdf
pdftotext assets/israel-cv-portugues.pdf assets/israel-cv-portugues.txt
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
Cada idioma tem dois nomes PDF por compatibilidade com links externos; mantenha as cópias idênticas.

A graduação começou em 2021 (mês não informado), terminou em 19/08/2026 e não se confunde
com a defesa do TCC em 02/2025. Datas da consultoria e das monitorias foram confirmadas pelo autor.
Mantenha esses períodos sincronizados entre HTML, LaTeX, PDFs e texto simples.

## Verificações antes de publicar

Não há CI configurado. O mínimo recomendado a cada alteração:

- todos os arquivos referenciados existem (`src`, `href`, `link`);
- âncoras internas (`#secao`) apontam para IDs que existem;
- PT → EN → PT restaura os textos; os links de currículo acompanham o idioma;
- disclosures funcionam por teclado e âncoras abrem o conteúdo fechado;
- não há overflow horizontal global em celular, com detalhes abertos e fechados;
- `pdftotext` preserva nome, contatos, curso, empregador, cargo e período em ordem;
- números repetidos em mais de uma página continuam coerentes entre si.
