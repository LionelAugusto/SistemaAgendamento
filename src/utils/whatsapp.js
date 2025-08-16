const axios = require("axios");

// 🔔 Envia notificação para o admin via WhatsApp
async function enviarWhatsapp({ nome, telefone, servico, data, hora }) {
  const instanceId = "131306"; // 👈 seu instanceId do UltraMsg
  const token = "mi7kme19ystv0vt2"; // ⚠️ Substituir pela token real do UltraMsg
  const numeroAdmin = "43999806993"; // ⚠️ Substituir pelo número do admin (sem + ou espaços)

  const mensagem = `📢 NOVO AGENDAMENTO\n\n👤 Nome: ${nome}\n📞 WhatsApp: ${telefone}\n💇‍♀️ Serviço: ${servico}\n📅 Data: ${data}\n🕒 Hora: ${hora}`;

  try {
    await axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat`, {
      token,
      to: numeroAdmin,
      body: mensagem
    });
    console.log("✅ WhatsApp enviado ao admin com sucesso.");
  } catch (erro) {
    console.error("❌ Erro ao enviar WhatsApp:", erro.response?.data || erro.message);
  }
}

module.exports = enviarWhatsapp;
