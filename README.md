# Implementação Design Pattern - Arquitetura de Software
Este é um sistema simples de gerenciamento de contatos implementado em JavaScript. Ele permite adicionar, remover, listar e buscar contatos por meio de uma interface de linha de comando (CLI). O código foi estruturado de forma a seguir as melhores práticas de desenvolvimento e utiliza os padrões de projeto: Adapter e Strategy.

## Classe Contato:
Representa um contato com os atributos nome, telefone e email.

## Padrão de Projeto Estrutural: Adapter (Classe ArmazenamentoContatos):
Esta classe encapsula a lógica de armazenamento dos contatos em uma lista interna. O padrão Adapter é utilizado aqui para permitir que diferentes formas de armazenamento possam ser facilmente incorporadas no futuro, sem a necessidade de modificar o código existente. Isso proporciona flexibilidade e facilita a manutenção do sistema.

## Classe GerenciadorContatos:
Responsável por interagir com os contatos, fornecendo métodos para adicionar, remover e listar contatos. Utiliza uma instância da classe ArmazenamentoContatos para gerenciar a lista de contatos de forma encapsulada.

## Padrão de Projeto Comportamental: Strategy (Classe EstrategiaBusca):
A classe EstrategiaBusca implementa diferentes algoritmos de busca de contatos. Utilizamos o padrão Strategy para permitir que a funcionalidade de busca possa variar independentemente dos algoritmos de busca. Isso facilita a extensão e manutenção do sistema, pois novos algoritmos de busca podem ser facilmente adicionados sem modificar o código existente.

## Classe CLI (Interface de Linha de Comando):
Interage com o usuário por meio da linha de comando, oferecendo opções para adicionar, remover, listar e buscar contatos. Utiliza uma instância da classe GerenciadorContatos para realizar operações nos contatos.

## Visão Geral
Essa documentação visa fornecer uma visão geral do código implementado, explicando a escolha dos padrões de projeto utilizados e destacando as melhores práticas de desenvolvimento seguidas.
