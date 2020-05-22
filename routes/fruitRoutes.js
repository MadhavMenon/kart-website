const express = require('express');
const fruitController = require('./../controllers/fruitController');
const userController = require('./../controllers/viewController');
const router = express.Router();

router
    .route('/')
    .get(fruitController.getAllProducts);
    

router 
    .route('/:id')
    .get(fruitController.oneProduct)
    .post(userController.buyProduct);

module.exports = router;        