require('dotenv').config();
const mongoose = require('mongoose');

// Conecta ao MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conexão com MongoDB Atlas bem-sucedida!');
  mongoose.connection.close(); // Fecha a conexão após o teste
})
.catch((err) => {
  console.error('❌ Erro ao conectar no MongoDB:', err);
});
