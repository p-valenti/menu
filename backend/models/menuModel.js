const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema)