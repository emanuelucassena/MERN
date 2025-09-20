// src/controllers/usuario.controller.js

// Função responsável por criar um usuário
const criar = (req, res) => {
  // Desestruturação: pega os campos do corpo da requisição (req.body)
  const { nome, nomeUsuario, email, senha } = req.body;

  // Validação simples: verifica se algum campo obrigatório está faltando
  if (!nome || !nomeUsuario || !email || !senha) {
    // Retorna status 400 (Bad Request) e uma mensagem de erro em JSON
    return res
      .status(400)
      .send({ erro: "Envie todos os campos para registro." });
  }

  // Se passou na validação, retorna status 201 (Created)
  // e envia um objeto JSON com mensagem + os dados do usuário criado
  return res.status(201).send({
    mensagem: "Usuário criado com sucesso",
    usuario: {
      nome,
      nomeUsuario,
      email,
      senha,
    },
  });
};

// Exporta a função 'criar' para ser usada em outros arquivos (ex: rotas)
module.exports = { criar };
