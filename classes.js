class Contato{
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class ArmazenamentoContatos {
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

class GerenciadorContatos {
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

class EstrategiaBusca {
    constructor() {}
  
    buscar(contatos, termo) {
      // Implementação padrão de busca
      return contatos.filter(contato =>
        contato.nome.toLowerCase().includes(termo.toLowerCase())
      );
    }
}

class CLI {
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

const adaptador = new ArmazenamentoContatos();
const gerenciadorContatos = new GerenciadorContatos(adaptador);
const interface = new CLI(gerenciadorContatos);

interface.adicionarContato("João Vitor", "123456789", "joaov@gmail.com");
interface.adicionarContato("Maria Vitória", "987654321", "mariaToria@gmail.com");
interface.adicionarContato("Jhonatan", "10101010", "aJhon@gmail.com");
interface.adicionarContato("Bethina", "232323", "bet@gmail.com");
interface.adicionarContato("Gabriella", "2487837", "gabriella@gmail.com");
interface.adicionarContato("Giovanna", "2525253", "giovanna@gmail.com");

interface.listarContatos();

interface.buscarContatos("j");
interface.buscarContatos("g");