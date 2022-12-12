const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    preparation: {
        type: Number,
        required: false
    },
    cooking: {
        type: Number,
        required: false
    },
    ingredients: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)