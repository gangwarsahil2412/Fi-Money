const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true},
    sku: { type: String, required: true, unique: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 }
});

const productModel = mongoose.model("product", productSchema);

module.exports = {
    productModel
}