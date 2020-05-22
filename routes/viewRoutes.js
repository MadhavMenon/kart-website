const express = require('express');
const viewController = require('./../controllers/viewController');
const router = express.Router();

router
    .route('/')
    .get('viewController.overview');
router
    .route('/:id')
    .get('viewController.fruit');
router
    .route('/cart')
    .get('viewController.cart');
router
    .route('/user/:id')
    .get('viewController.user');
router  
    .route('/newUser')
    .get('viewController.signup');
router 
    .route('/login')
    .get('viewController.login')                    
    