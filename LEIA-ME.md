# Pata Amiga — versão React

## O que foi atualizado
- A página inicial foi organizada em componentes React.
- Foi adicionada a seção **Guia de adoção responsável**, acessível pelo menu principal e pelo rodapé.
- O guia aborda alimentação, saúde, custos e responsabilidades.
- Foram mantidos o logotipo, as imagens e a identidade visual do projeto original.
- O menu mobile possui estado React e atributos de acessibilidade.

## Como executar
É necessário ter Node.js instalado.

1. Abra esta pasta no VS Code.
2. Abra o terminal integrado.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra no navegador o endereço local indicado pelo Vite.

Para gerar a versão de produção, execute `npm run build`. Os arquivos finais serão criados na pasta `dist`.

## Estrutura principal
- `src/App.jsx`: componentes React e conteúdo da aplicação.
- `src/main.jsx`: ponto de entrada React.
- `src/style.css`: estilos da aplicação e da nova seção.
- `img/`: logotipo e favicon originais.

## Observação sobre a integração
O ZIP recebido não continha `vitrine.html` nem `faq.html`; os links existentes para essas páginas foram preservados, mas dependem dos arquivos desenvolvidos pela equipe. Os contatos das ONGs também permanecem como exemplos e precisam ser substituídos pelos contatos reais.


## Integração da vitrine de animais
- A vitrine da equipe foi integrada à aplicação React.
- Acesse pelo menu **Animais** ou pelo botão da página inicial.
- Rotas: `/vitrine` e `/detalhes/:id`.
- As fotos ficam em `public/Animais`.
- Foi adicionada a dependência `react-router-dom` (v6).

Depois de substituir os arquivos pelo conteúdo desta pasta, abra o terminal nesta pasta e execute:
1. `npm.cmd install`
2. `npm.cmd run dev`

Observação: os links de contato de adoção existentes nos dados dos animais ainda são links de perfil do GitHub ou estão vazios. Antes da apresentação final, confirme com a equipe quais contatos oficiais devem ser usados.


## Atualização: ONGs Parceiras

A seção ONGs Parceiras foi integrada à página inicial, com as imagens, responsáveis e links do componente enviado pela colega. O restante do projeto e suas dependências originais foram preservados.


## Atualização: seção FAQ

A seção de Perguntas Frequentes foi integrada ao projeto React:
- Acesse pela rota `/faq`.
- O botão "Ver perguntas frequentes" na página inicial abre essa rota.
- O menu principal e o rodapé também possuem o link FAQ.
- As cinco perguntas e respostas e o comportamento de abrir/fechar foram mantidos.
