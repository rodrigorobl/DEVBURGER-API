const express = require('express');
const { resolve } = require('node:path');
const cors = require('cors');

const routes = require('./routes');
require('./database');

class App {
  constructor() {
    this.app = express();

    //this.app.use(cors());//
    this.app.use(cors({
      origin: 'https://devburger-interface-five.vercel.app',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    }));
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );

    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
