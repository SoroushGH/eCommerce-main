const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('products', productSchema);
