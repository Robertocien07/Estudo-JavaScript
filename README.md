# 📝 Gerenciador de Tarefas

Um aplicativo web simples e moderno para organizar suas tarefas diárias. Este projeto está sendo construído do zero como parte dos meus estudos práticos de desenvolvimento Front-end e versionamento de código.

## 🚀 Tecnologias Utilizadas

Até o momento, o projeto utiliza:
- **HTML5**: Estruturação semântica da página.
- **CSS3**: Estilização moderna, layout responsivo com **Flexbox** e design focado na experiência do usuário.
- **JavaScript (ES6+)**: Manipulação do DOM, captura de eventos (`addEventListener`) e criação dinâmica de elementos HTML.
- **Git e GitHub**: Versionamento com Conventional Commits (ex: `feat:`, `style:`, `docs:`).

## ⚙️ Funcionalidades

- [x] Estrutura base em HTML.
- [x] Design moderno e responsivo (mobile-first) com CSS.
- [x] Adicionar novas tarefas via formulário (JavaScript).
- [ ] Marcar tarefas como concluídas.
- [ ] Deletar tarefas da lista.
- [ ] Salvar as tarefas no navegador (LocalStorage) para não perder os dados ao atualizar a página.

## 🧠 Como a Lógica Funciona (Bastidores)

1. O usuário digita a tarefa no input e clica em "Adicionar".
2. O JavaScript intercepta o envio do formulário (evitando que a página recarregue) usando `event.preventDefault()`.
3. O texto é extraído, limpo (removendo espaços extras) e validado.
4. Um novo elemento `<li>` é criado dinamicamente com `document.createElement()`.
5. Esse novo elemento é inserido na lista `<ul>` visível na tela usando `appendChild()`.

## 💻 Como rodar o projeto

1. Clone o repositório.
2. Navegue até a pasta `gerenciador-tarefas`.
3. Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** no VS Code.

---
*Desenvolvido por [Roberto Donato](https://github.com/Robertocieno07)*