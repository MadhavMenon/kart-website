const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema(
    {
        productName:{
            type: String,
            required: [true, ' a product must have a name'],
            unique: true,
            trim: true,
            maxlength: [40, 'A tour name must have less or equal then 40 characters'],
            minlength: [10, 'A tour name must have more or equal then 10 characters']
        },
        from: {
            type: String,
            trim: true,
            required: [true, ' a product must have a origin']
        },
        nutrients: {
            type:String,
            required: [true, 'a product must have this ']
        },
        quantity: {
            type: String,
            required: [true, 'a product must have this']
        },
        price: {
            type: Number,
            required: [true, 'a product must have this']
        },
        organic: {
            type: Boolean,
            default: false,
            required: [true, 'a product must have this']
        },
        description: {
            type: String,
            trim: true,
            required: [true, ' a product must have a description']
        }
    });

const product = mongoose.model('product', fruitSchema);

module.exports = product;