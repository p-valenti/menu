const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dishSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

const menuSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    dishes: [
        {
            title: String,
            amount: Number
        }
    ],
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Dish', dishSchema)
module.exports = mongoose.model('Menu', menuSchema)