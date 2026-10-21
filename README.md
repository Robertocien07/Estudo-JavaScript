# 📝 Gerenciador de Tarefas

Um aplicativo web simples e moderno para organizar suas tarefas diárias. Este projeto está sendo construído do zero como parte dos meus estudos práticos de desenvolvimento Front-end e versionamento de código.

## 🖼️ Preview do Projeto

![Preview do Gerenciador de Tarefas](.gerenciador-tarefas/preview.png)

## 🚀 Tecnologias Utilizadas

Até o momento, o projeto utiliza:
- **HTML5**: Estruturação semântica da página.
- **CSS3**: Estilização moderna, layout responsivo com **Flexbox** e design focado na experiência do usuário.
- **JavaScript (ES6+)**: Manipulação do DOM, captura de eventos (`addEventListener`), criação dinâmica de elementos (`createElement`) e remoção de elementos (`removeChild`).
- **Git e GitHub**: Versionamento com Conventional Commits (ex: `feat:`, `style:`, `docs:`).

## ⚙️ Funcionalidades

- [x] Estrutura base em HTML.
- [x] Design moderno e responsivo (mobile-first) com CSS.
- [x] Adicionar novas tarefas via formulário (JavaScript).
- [x] Deletar tarefas da lista (JavaScript).
- [ ] Marcar tarefas como concluídas.
- [ ] Salvar as tarefas no navegador (LocalStorage) para não perder os dados ao atualizar a página.

## 🧠 Como a Lógica Funciona (Bastidores)

1. **Adicionar Tarefa:** O usuário digita a tarefa e clica em "Adicionar". O JavaScript intercepta o envio do formulário (evitando que a página recarregue), extrai o texto e cria um novo elemento `<li>` dinamicamente.
2. **Deletar Tarefa:** Junto com o texto da tarefa, o JavaScript cria um botão "X". Quando esse botão é clicado, ele aciona a função `removeChild()`, que remove o item da lista da tela instantaneamente.

## 💻 Como rodar o projeto

1. Clone o repositório.
2. Navegue até a pasta `gerenciador-tarefas`.
3. Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** no VS Code.

---
*Desenvolvido por [Roberto Donato](https://github.com/Robertocieno07)*