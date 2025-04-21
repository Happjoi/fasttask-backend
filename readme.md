# FastTask - Backend

API RESTful desenvolvida em Node.js com Express e MongoDB, responsável por autenticação de usuários e gerenciamento de tarefas.

## Tecnologias Utilizadas

* Node.js
* Express
* Mongoose (ODM para MongoDB)
* MongoDB (Banco de Dados)
* JWT (JSON Web Tokens para autenticação)
* Bcrypt (Para hash de senhas)
* CORS (Compartilhamento de recursos entre origens diferentes)
* Dotenv (Carregar variáveis de ambiente)
* Nodemon (Para desenvolvimento - reinício automático do servidor)

## Funcionalidades

* Registro de novos usuários.
* Login de usuários existentes.
* Autenticação de rotas usando JWT.
* Criação de novas tarefas associadas a um usuário.
* Listagem de tarefas do usuário autenticado.
* Atualização de tarefas existentes do usuário autenticado.
* Exclusão de tarefas existentes do usuário autenticado.
* Formatação automática de datas (`createdAt`, `updatedAt`) nas respostas JSON.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

* Node.js e npm (ou Yarn)

## Instalação

1.  Clone este repositório:

    ```bash
    git clone https://github.com/Happjoi/fasttask-backend
    cd /backend
    ```

2.  Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  Crie um arquivo `.env` na raiz da pasta `backend/` e configure as variáveis de ambiente.
