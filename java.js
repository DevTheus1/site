// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log(`${this.nome} está trabalhando.`);
    }
  }
  
  // Classe Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`${this.nome} é um gerente do departamento de ${this.departamento}.`);
    }
  }
  
  // Classe Desenvolvedor que herda de Funcionario
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`${this.nome} é um desenvolvedor que programa em ${this.linguagem}.`);
    }
  }
  
  // Criando instâncias de Gerente e Desenvolvedor
  const gerente1 = new Gerente('João', 35, 'Gerente de Projetos', 'TI');
  const desenvolvedor1 = new Desenvolvedor('Maria', 28, 'Desenvolvedor Web', 'JavaScript');
  
  // Chamando os métodos apropriados
  gerente1.seApresentar();
  gerente1.trabalhar();
  gerente1.gerenciar();
  
  desenvolvedor1.seApresentar();
  desenvolvedor1.trabalhar();
  desenvolvedor1.programar();
  