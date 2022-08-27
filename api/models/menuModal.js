const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
        default: false
    },
    productCategory: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: false,
        default: null
    }
})

module.exports = mongoose.model('MenuItems', menuSchema)