const Sequelize = require('sequelize');
const mongoose = require('mongoose');

const configDatabase = require('../config/database');

const User = require('../app/models/User');
const Product = require('../app/models/Products');
const Category = require('../app/models/Category');

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    // String de conexão com # codificado como %23
    const mongoURI = 'mongodb+srv://rodrigoaugustor21:5xQ3k3BAD%23pKBCe@cluster0.by5ulwn.mongodb.net/devburger';
    
    this.mongoConnection = mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('Conexão com MongoDB Atlas estabelecida com sucesso');
    }).catch((error) => {
      console.error('Erro na conexão com MongoDB Atlas:', error.message);
    });
  }
}

module.exports = new Database();
