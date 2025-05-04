const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'product name must be provied']
    },
    price: {
        type: Number,
        require: [true, 'product price must be provied']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message:'{VALUE} is not supported'
        }
    }
});
module.exports = mongoose.model('Product',productSchema);