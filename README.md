# Portfólio pessoal

Portfólio estático desenvolvido com HTML, CSS e JavaScript, pronto para publicação no GitHub Pages.

## Personalização inicial

Antes de publicar, substitua no projeto:

- `Seu Nome`
- `seuusuario`
- `seuemail@exemplo.com`
- Links dos repositórios
- Texto da seção “Sobre mim”
- Competências que realmente representam seu perfil
- Link do relatório do projeto Triple Roman Domination

Uma busca global no editor por `Seu Nome`, `seuusuario` e `seuemail` facilita essa etapa.

## Executar localmente

Você pode abrir `index.html` diretamente no navegador ou iniciar um servidor local:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Publicar no GitHub Pages

### Repositório de perfil

1. Crie um repositório chamado `seuusuario.github.io`.
2. Envie os arquivos deste projeto para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve. O site ficará disponível em `https://seuusuario.github.io/`.

### Comandos Git

```bash
git init
git add .
git commit -m "feat: cria versão inicial do portfólio"
git branch -M main
git remote add origin https://github.com/seuusuario/seuusuario.github.io.git
git push -u origin main
```

## Domínio próprio no futuro

Quando você comprar um domínio, configure-o no campo **Custom domain** das configurações do GitHub Pages. O GitHub criará ou atualizará o arquivo `CNAME` automaticamente.

## Estrutura

```text
.
├── assets/
│   └── favicon.svg
├── index.html
├── styles.css
├── script.js
└── README.md
```
