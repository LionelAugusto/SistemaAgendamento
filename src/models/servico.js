const mongoose = require("mongoose");

const servicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  preco: { type: Number, required: true },
  duracao: { type: Number, required: true } // duração em minutos
});

module.exports = mongoose.model("Servico", servicoSchema);
