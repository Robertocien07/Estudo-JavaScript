// Criando a "planta" (Classe)
class Aluno {
  constructor(nome, idade, curso) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
  }

  apresentar() {
    console.log(`Olá! Sou ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
  }
}

// Criando objetos reais a partir da classe
const aluno1 = new Aluno("Roberto", 25, "Mobile");
const aluno2 = new Aluno("Ana", 22, "Front-end");

// Executando a ação
aluno1.apresentar();
aluno2.apresentar();