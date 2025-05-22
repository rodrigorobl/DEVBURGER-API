const mongoose = require('mongoose');
const app = require('./src/app');  // ajuste o caminho se necessário

const mongoURI = 'mongodb+srv://rodrigoaugustor21:5xQ3k3BAD%23pKBCe@cluster0.by5ulwn.mongodb.net/devburger';

async function startServer() {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB conectado com sucesso');

    app.listen(3001, () => {
      console.log('Servidor rodando na porta 3001');
    });
  } catch (error) {
    console.error('Erro na conexão com MongoDB:', error.message);
    process.exit(1);
  }
}

startServer();
