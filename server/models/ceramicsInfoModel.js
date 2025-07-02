const mongoose = require('mongoose');

const ceramicsinfoSchema = new mongoose.Schema({
    title: String,
    size: String,
    price: Number,
    description: String,
    imageUrl: String,
    made: String,
}, { collection: 'ceramics_item_info' });

module.exports = mongoose.model('CeramicsItemInfo', ceramicsinfoSchema);
