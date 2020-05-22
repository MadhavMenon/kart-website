const product = require('./../models/fruitModel');
const use = require('./../models/userModel');

exports.overview = async(req, res)=>{
    
        const p =await product.find();
        res.status(200).render('overview',{
            title: 'Welcome',
            data:{
                p
            }
        });
    
}

exports.cart = async(req, res)=>{

        res.status(200).render('cart');
    
}
exports.fruit = async(req, res)=>{
    
        res.status(200).render('fruit');
    
}
exports.user = async(req, res)=>{
    
        res.status(200).render('user');
    
}
exports.login = async(req, res)=>{
    
        res.status(200).render('login');
    
}
exports.signup = async(req,res)=>{
    
        res.status(200).render('signup');
    
}