const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    passwordHash: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    }
});
  
schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);