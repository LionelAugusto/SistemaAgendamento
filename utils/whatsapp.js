// src/utils/whatsapp.js
const axios = require("axios");

const instanceId = "131306"; // Seu ID confirmado
const token = "mi7kme19ystv0vt2"; // Coloque o token fornecido no painel UltraMsg

async function enviarMensagemWhatsApp(numero, mensagem) {
  try {
    const url = `https://api.ultramsg.com/${instanceId}/messages/chat`;

    const resposta = await axios.post(url, {
      token,
      to: numero, // Ex: "+554399806993"
      body: mensagem,
    });

    console.log("✅ Mensagem enviada:", resposta.data);
  } catch (erro) {
    console.error("❌ Erro ao enviar mensagem:", erro.response?.data || erro.message);
  }
}

module.exports = { enviarMensagemWhatsApp };
