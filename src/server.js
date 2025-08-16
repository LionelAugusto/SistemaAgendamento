// src/server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Função para conectar ao MongoDB
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado ao MongoDB Atlas!');

    const app = express();
    app.use(express.json());

    const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});


    // Rotas da API
    const usuarioRoutes = require('./routes/usuario.routes');
    const servicoRoutes = require('./routes/servico.routes');
    const agendamentoRoutes = require('./routes/agendamento.routes');

    app.use('/api/usuarios', usuarioRoutes);
    app.use('/api/servicos', servicoRoutes);
    app.use('/api/agendamentos', agendamentoRoutes);

    // Porta do Railway ou fallback para 3000
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

  } catch (err) {
    console.error('❌ Erro ao conectar no MongoDB:', err);
  }
}

// Inicia o servidor
startServer();
