const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category: { 
        type: String, 
        unique: true, 
        required: true 
    },
    category_id: {
        type: Number,
        unique: true,
        required: true
    },
});
module.exports = mongoose.model('categories', categorySchema);
