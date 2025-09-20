// src/routes/usuario.rota.js

// Importa o Router do Express para criar rotas de forma modular
const rota = require("express").Router();

// Importa o controller que contém a lógica da rota (função criar)
const usuarioController = require("../controllers/usuario.controller");

// Define a rota POST /usuario
// Quando o cliente fizer um POST em /usuario, será executada a função 'criar' do controller
rota.post("/", usuarioController.criar);

// Exporta o objeto 'rota' para ser usado em index.js (onde todas as rotas são centralizadas)
module.exports = rota;
