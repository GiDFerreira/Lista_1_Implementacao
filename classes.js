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