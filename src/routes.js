const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const authMiddleware = require('./app/middlewares/auth');

const UserControler = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const ProductController = require('./app/controllers/ProductController');
const CategoryController = require('./app/controllers/CategoryController');
const OrderController = require('./app/controllers/OrderController');
const CreatePaymentIntentController = require('./app/controllers/stripe/CreatePaymentIntentController');

const routes = new Router();

const upload = multer(multerConfig);

// Healthcheck endpoint para manter a aplicação ativa na Vercel
routes.get('/healthcheck', (req, res) => {
  return res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', upload.single('file'), ProductController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);

routes.post('/create-payment-intent', CreatePaymentIntentController.store);

module.exports = routes;
