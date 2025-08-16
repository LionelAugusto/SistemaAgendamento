// src/models/usuario.js
const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  tipo: { type: String, enum: ["admin", "cliente"], required: true } // ajuste conforme seu sistema
});

module.exports = mongoose.model("Usuario", usuarioSchema);
