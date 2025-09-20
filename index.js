const express = require("express");
const app = express();

// Importar rota de usuários
const usuarioRota = require("./src/routes/usuario.rota");

const porta = 3000;

// Middleware para JSON (sempre bom ter)
app.use(express.json());

// Registrar rota
app.use("/usuario", usuarioRota);

// Iniciar servidor
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
