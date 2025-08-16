require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado ao MongoDB Atlas!");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Erro ao conectar:", err);
    process.exit();
  });
