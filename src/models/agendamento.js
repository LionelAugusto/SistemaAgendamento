const mongoose = require("mongoose");

const agendamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  servico: { type: String, required: true },
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  status: { type: String, enum: ['pendente', 'confirmado', 'cancelado'], default: 'pendente' }
});

module.exports = mongoose.model("Agendamento", agendamentoSchema);
