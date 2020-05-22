const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true,
            required: [true, ' a user must have a name']
        },
        password: {
            type: String,
            trim: true,
            required: [true, 'a user must have a password']
        },
        credits: {
            type: Number,
            default: 0
        }
        
});

const user = mongoose.model('kart_user', userSchema);

module.exports = user;