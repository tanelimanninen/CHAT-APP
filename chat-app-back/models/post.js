const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    }
});
  
  
module.exports = mongoose.model('Post', schema);