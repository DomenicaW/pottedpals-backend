const mongoose = require('mongoose')
const Schema = mongoose.Schema


const plantSchema = new Schema({
    name: { type: String, required: true },
    type: String,
    caretaking: String,
    img: String,
    description: String,
})

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant