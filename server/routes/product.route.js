//import controller! 
const ProductController = require('../controllers/product.controller');
const ProductController2 = require('../controllers/product2.controller');
const OrderController = require('../controllers/order.controller');
const UserController = require('../controllers/user.controller')


//these routes must match in your useEffect/axios functions in your React app!!! 
module.exports = app =>{
    app.get('/api/products', ProductController.findAll);
    app.get('/api/products/:id', ProductController.FindOne);
    app.put('/api/products/:id', ProductController.updateOne);
    app.post('/api/products', ProductController.createNew);
    app.delete('/api/products/:id', ProductController.deleteOne);

    app.get('/api/products2', ProductController2.findAll);
    app.get('/api/products2/:id', ProductController2.FindOne);
    app.put('/api/products2/:id', ProductController2.updateOne);
    app.post('/api/products2', ProductController2.createNew);
    app.delete('/api/products2/:id', ProductController2.deleteOne);

    app.get('/api/orders', OrderController.findAll);
    app.get('/api/orders/:id', OrderController.FindOne);
    app.put('/api/orders/:id', OrderController.updateOne);
    app.post('/api/orders', OrderController.createNew);
    app.delete('/api/orders/:id', OrderController.deleteOne);

    app.get('/api/users', UserController.findAll);
    app.get('/api/users/:id', UserController.FindOne);
    app.put('/api/users/:id', UserController.updateOne);
    app.post('/api/users', UserController.createNew);
    app.delete('/api/users/:id', UserController.deleteOne);
}
