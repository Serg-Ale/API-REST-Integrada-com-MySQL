# Projeto de API REST com Node.js e Sequelize

Este é um projeto de API REST desenvolvido como parte dos meus estudos em backend na UTFPR (Universidade Tecnológica Federal do Paraná). A aplicação foi construída usando Node.js para o lado do servidor, Express.js para criar as rotas da API e Sequelize como ORM (Object-Relational Mapping) para integração com o banco de dados.

## Funcionalidades

- **Listagem de Contatos:** A API permite a listagem de contatos a partir do banco de dados, com suporte a filtragem por nome e tipo.
- **Detalhes do Contato:** Detalhes de um contato específico podem ser acessados através do seu ID.
- **Adição e Atualização de Contatos:** Contatos podem ser adicionados e atualizados através das rotas POST e PUT, respectivamente.
- **Exclusão de Contatos:** Contatos podem ser excluídos utilizando a rota DELETE.

## Tecnologias Utilizadas

- **Node.js:** Utilizado como ambiente de execução para o servidor.
- **Express.js:** Utilizado para criar as rotas da API e facilitar o manuseio das requisições HTTP.
- **Sequelize:** ORM utilizado para interagir com o banco de dados de forma mais intuitiva e segura.

## Como Usar

1. Clone o repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `helpers/bd.js`.
4. Inicie o servidor: `node app.js`
5. Acesse a API em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para reportar bugs ou requisitar novas funcionalidades. Se desejar contribuir diretamente, por favor, siga o padrão de código e abra um pull request.

---

**Nota:** Este projeto foi desenvolvido como parte dos meus estudos em backend na UTFPR. Fique à vontade para explorar o código e aprender com ele!
