const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    timeOfPreparation: {
        type: Number,
        required: false
    },
    timeOfCooking: {
        type: Number,
        required: false
    },
    ingredients: {
        type: String,
        required: true,
    },
    recipeText: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema)