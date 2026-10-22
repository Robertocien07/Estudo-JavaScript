// 1. Constantes e Variáveis Globais
const STORAGE_KEY = 'tarefas';
const form = document.getElementById('form-tarefa');
const input = document.getElementById('input-tarefa');
const lista = document.getElementById('lista-tarefas');

let tarefas = carregarTarefas();

// 2. Funções de Persistência (LocalStorage)
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem(STORAGE_KEY);
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
}

function salvarTarefas() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
}

// 3. Funções de DOM (Criação de Elementos)
function criarElementoTarefa(textoTarefa, index) {
    const li = document.createElement('li');

    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;

    const btnDeletar = document.createElement('button');
    btnDeletar.textContent = 'X';
    btnDeletar.className = 'btn-deletar'; // Clean code: classe em vez de styles inline
    btnDeletar.setAttribute('data-index', index); // Guarda o index para a delegação de eventos

    li.appendChild(spanTexto);
    li.appendChild(btnDeletar);

    return li;
}

// 4. Função Principal de Renderização
function renderizarTarefas() {
    lista.innerHTML = ''; // Limpa a lista (poderia ser replaceChildren())

    tarefas.forEach((tarefa, index) => {
        const li = criarElementoTarefa(tarefa, index);
        lista.appendChild(li);
    });
}

// 5. Manipulação de Estado (Add/Remove)
function adicionarTarefa(texto) {
    tarefas.push(texto);
    salvarTarefas();
    renderizarTarefas();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    salvarTarefas();
    renderizarTarefas();
}

// 6. Event Listeners
form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const textoDigitado = input.value.trim();

    if (!textoDigitado) {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    adicionarTarefa(textoDigitado);
    input.value = '';
});

// Event Delegation: Um único listener para todos os botões
lista.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('btn-deletar')) {
        const index = evento.target.getAttribute('data-index');
        removerTarefa(Number(index));
    }
});

// Inicialização
renderizarTarefas();