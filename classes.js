class Contato{ //Representa informações de contato
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class ArmazenamentoContatos { //Função para armazenar contatos, adicionar, remover e listar
    constructor() {
      this.contatos = [];
    }
  
    adicionar(contato) {
      this.contatos.push(contato);
    }
  
    remover(contato) {
      const index = this.contatos.indexOf(contato);
      if (index !== -1) {
        this.contatos.splice(index, 1);
      }
    }
  
    listar() {
      return this.contatos;
    }
}

class GerenciadorContatos { //Manipula lista de contatos
    constructor(adaptador) {
      this.adaptador = adaptador;
    }
  
    adicionarContato(nome, telefone, email) {
      const contato = new Contato(nome, telefone, email);
      this.adaptador.adicionar(contato);
    }
  
    removerContato(contato) {
      this.adaptador.remover(contato);
    }
  
    listarContatos() {
      return this.adaptador.listar();
    }
}

class EstrategiaBusca { //Busca os contatos existentes
    constructor() {}
  
    buscar(contatos, termo) {
      // Implementação padrão de busca
      return contatos.filter(contato =>
        contato.nome.toLowerCase().includes(termo.toLowerCase())
      );
    }
}

class CLI { //Fornece uma interface na linha de comando
    constructor(gerenciadorContatos) {
      this.gerenciadorContatos = gerenciadorContatos;
      this.estrategiaBusca = new EstrategiaBusca();
    }
  
    adicionarContato(nome, telefone, email) {
      this.gerenciadorContatos.adicionarContato(nome, telefone, email);
    }
  
    removerContato(contato) {
      this.gerenciadorContatos.removerContato(contato);
    }
  
    listarContatos() {
      const contatos = this.gerenciadorContatos.listarContatos();
      console.log("Lista de Contatos:");
      contatos.forEach(contato =>
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
      );
    }
  
    buscarContatos(termo) {
      const contatos = this.gerenciadorContatos.listarContatos();
      const resultados = this.estrategiaBusca.buscar(contatos, termo);
      console.log("Resultados da Busca:");
      resultados.forEach(contato =>
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
      );
    }
}

//Cria-se novos objetos nas classes
const adaptador = new ArmazenamentoContatos();
const gerenciadorContatos = new GerenciadorContatos(adaptador);
const cli = new CLI(gerenciadorContatos);


//Adiciona informações para contato
cli.adicionarContato("João Vitor", "123456789", "joaov@gmail.com");
cli.adicionarContato("Maria Vitória", "987654321", "mariaToria@gmail.com");
cli.adicionarContato("Jhonatan", "10101010", "aJhon@gmail.com");
cli.adicionarContato("Bethina", "232323", "bet@gmail.com");


//Lista contatos
cli.listarContatos();

//Pesquisa contatos com a inicial J
cli.buscarContatos("j")