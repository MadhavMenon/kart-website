const express = require('express');
const fruitController = require('./../controllers/fruitController');
const userController = require('./../controllers/viewController');
const router = express.Router();

router
    .route('/user/:id')
    .get(userController.getAllDetails)
    
router
    .route('/user/:id/change')
    .patch(userController.changeUserDetails)
    .delete(userController.deleteUser);
 
router
    .route('/newUser') 
    .post(userController.newUser);

module.exports = router;    