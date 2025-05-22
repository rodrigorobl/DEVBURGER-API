const mongoose = require('mongoose');

// A senha contém um caractere # que precisa ser codificado na URL
// Substituindo 5xQ3k3BAD#pKBCe por 5xQ3k3BAD%23pKBCe (onde %23 é a codificação de #)
const mongoURI = 'mongodb+srv://rodrigoaugustor21:5xQ3k3BAD%23pKBCe@cluster0.by5ulwn.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB; 