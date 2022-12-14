const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    prepTimeSec: {
        type: Number,
        required: false
    },
    cookTimeSec: {
        type: Number,
        required: false
    },
    ingredients: {
        type: String,
        required: true,
    },
    instruction: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)