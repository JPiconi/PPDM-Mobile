// ESPRESS --> Framework para criar servidores e API de forma rápida!
// EXPRESS --> Facilita na criação de rotas,  a lidar com requisições e respostas
const express = require("express");

//CORS --> Permite que nosso back-end aceite requisições vindas de outras origens (React Native, React)
//CORS --> Sem o cors, os navegadores bloqueiam essas conexões.
const cors = require("cors");

//DOTENV --> Gerencia as variáveis de ambiente em um arquivo .env
//DOTENV --> Desta maneira não deixamos senhas, tokens e configs exposts no código.
const dotenv = require("dotenv");

//MYSQL2 -->Biblioteca para conectarmos o node ao banco MYSQL
//MYSQL2 --> Essa versão suporta Promises, permitindo usar async/await em consultas
const mysql = require("mysql2")

//BCRYPT --> Usado para criptografar as senhas.
//BCRYPT --> Nunca devemos salvas as senhas puras no banco, por isso usamos o bcrypt
const bcrypt = require("bcrypt")

//JSONWEBTOKEN --> Gerar tokens de validação.
//JSONWEBTOKEN --> Quando o usuário loga, enviamos um JWT ao usuário, que será usado para acessar rotas protegidas
const jwt = require("jsonwebtoken")


const PORT = 3001;
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

//Conexão com o banco MYSQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

//Iniciando servidor!.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`)
})
