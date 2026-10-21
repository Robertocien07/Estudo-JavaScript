const form = document.getElementById('form-tarefa');
const input = document.getElementById('input-tarefa');
const lista = document.getElementById('lista-tarefas');

form.addEventListener('submit', function(evento) {
  evento.preventDefault(); 

  const textoTarefa = input.value.trim();

  if (textoTarefa === '') {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  // Criando o item da lista <li>
  const novoItem = document.createElement('li');
  
  // Criando o texto da tarefa
  const texto = document.createElement('span'); 
  texto.textContent = textoTarefa;

  // NOVO: Criando o botão de deletar
  const botaoDeletar = document.createElement('button');
  botaoDeletar.textContent = 'X'; // O texto do botão
  botaoDeletar.style.backgroundColor = 'transparent'; // Deixa o fundo transparente
  botaoDeletar.style.color = 'red'; // Deixa o X vermelho
  botaoDeletar.style.border = 'none'; // Tira a borda
  botaoDeletar.style.cursor = 'pointer'; // Mãozinha do mouse
  botaoDeletar.style.fontWeight = 'bold';

  // NOVO: O que acontece quando clicar no botão "X"
  botaoDeletar.addEventListener('click', function() {
    lista.removeChild(novoItem); // Remove o item da lista
  });

  // Juntando as partes: O item (li) recebe o texto (span) e o botão (button)
  novoItem.appendChild(texto);
  novoItem.appendChild(botaoDeletar);

  // Adicionando o item completo na tela
  lista.appendChild(novoItem);

  input.value = '';
});