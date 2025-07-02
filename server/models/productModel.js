const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  size: String,
  price: Number,
  imageUrl: String,
  made: String,
}, {collection: "Product"});

module.exports = mongoose.model('Product', productSchema);