const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poc = new Schema({
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
});

module.exports = mongoose.model('Poc', poc);