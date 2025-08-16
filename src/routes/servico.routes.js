const express = require('express');
const router = express.Router();
const Servico = require('../models/servico');

// Criar serviço
router.post('/', async (req, res) => {
  try {
    const servico = await Servico.create(req.body);
    res.status(201).json(servico);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar serviços
router.get('/', async (req, res) => {
  const servicos = await Servico.find();
  res.json(servicos);
});

module.exports = router;
