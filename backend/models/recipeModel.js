const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    date: {
        type: String,
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

module.exports = mongoose.model('Recipe', recipeSchema)