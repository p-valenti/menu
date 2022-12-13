const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema)