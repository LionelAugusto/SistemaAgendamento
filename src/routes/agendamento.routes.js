const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento');

// Criar agendamento
router.post('/', async (req, res) => {
  try {
    // Cria novo agendamento com status padrão "pendente"
    const agendamento = await Agendamento.create({ ...req.body, status: 'pendente' });
    res.status(201).json(agendamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar agendamentos
router.get('/', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find();
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar status do agendamento
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pendente', 'presente', 'concluído'].includes(status)) {
      return res.status(400).json({ error: 'Status inválido' });
    }
    const agendamento = await Agendamento.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(agendamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
