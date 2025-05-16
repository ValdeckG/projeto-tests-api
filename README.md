# API de Gerenciamento de Produtos

## Descrição

Esta é uma API REST desenvolvida em **Node.js** com **Express** e **MongoDB + Mongoose**, focada em CRUD de produtos com boas práticas, testes e validações. Permite o cadastro, listagem, atualização e exclusão de produtos.

### Lógica da aplicação

- Cadastro de produtos com os campos: nome, preço, marca e versão.
- Validação obrigatória de campos em todas as operações.
- Retorno consistente de mensagens e códigos HTTP.
- Camada de serviços desacoplada do controlador.
- Testes unitários com **Jest** para cobrir os principais fluxos.
- Integração com MongoDB via **Mongoose**.

---

## Tecnologias Utilizadas

- Node.js + Express
- JavaScript (ES6+)
- MongoDB + Mongoose
- Jest (para testes unitários)
- Dotenv (variáveis de ambiente)
- CORS (Cross-Origin Resource Sharing)

---

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/ValdeckG/projeto-tests-api.git

# Acessar o diretório
cd projeto-tests-api

# Instalar as dependências
npm install
```

---

##  Rodar a Aplicação

```bash
# Modo desenvolvimento
npm run dev

```

## Rodar os Testes

```bash
# Executar todos os testes unitários
npm run test
```

---

## Estrutura do Projeto

```
project/
│
├── controllers/
│   └── productsController.js  # Lógica de entrada/saída das rotas
│
├── database/
│   └── connection.js          # Conexão com MongoDB
│
├── models/
│   └── Products.js            # Schema do Mongoose
│
├── routes/
│   ├── productsRoutes.js      # Rotas de produtos
│   └── routes.js              # Rotas principais da API
│
├── services/
│   └── productServices.js     # Lógica de negócio
│
├── tests/
│   └── product.test.js        # Testes unitários com Jest
│
└── server.js                  # Arquivo principal do servidor
```

---


## Principais Endpoints

### Criar Produto

```http
POST /api/product 
```

---

### Listar Produtos

```http
GET /api/product
```

---

###  Atualizar Produto

```http
PUT /api/product/:id
```

---

### Deletar Produto

```http
DELETE /api/product/:id
```

---

## Testes

Testes unitários com **Jest** cobrem os seguintes casos:

-  Criação de produtos com dados válidos
-  Erro ao criar sem dados
-  Listagem de produtos
-  Atualização de produto e validação de campos.
-  Erro ao atualizar sem dados.
-  Erro ao atualizar sem ID.
-  Deleção com ID inválido
-  Erro ao deletar sem ID.

---
