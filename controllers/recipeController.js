const Recipe = require('../models/recipeModel')
const mongoose = require('mongoose')

//get all recipes
const getRecipes = async (req, res) => {
    const user_id = req.user._id
    const recipes = await Recipe.find({ user_id }).sort({createAt: -1})
    res.status(200).json(recipes)
}

// get a single Recipe
const getRecipe = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe'})
    }
    const recipe = await Recipe.findById(id)
    if (!recipe) {
        return res.status(404).json({error: 'No such recipe'})
    }
    res.status(200).json(recipe)
}

// create new Recipe
const createRecipe = async (req, res) => {
    const {name, prepTimeSec, cookTimeSec, ingredients, instruction} = req.body
    let emptyFields = []
    if(!name) {
        emptyFields.push('name')
    }
    if(!ingredients) {
        emptyFields.push('ingredients')
    }
    if(!instruction) {
        emptyFields.push('instruction')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    // add doc to db
    try {
        const user_id = req.user._id
        const recipe = await Recipe.create({name, prepTimeSec, cookTimeSec, ingredients, instruction, user_id})
        res.status(200).json(recipe)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete a Recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe'})
    }
    const recipe = await Recipe.findOneAndDelete({_id: id})
    if (!recipe) {
        return res.status(400).json({error: 'No such recipe'})
    }
    res.status(200).json(recipe)
}

// update a recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe'})
    }
    const recipe = await Recipe.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    if (!recipe) {
        return res.status(400).json({error: 'No such recipe'})
    }
    res.status(200).json(recipe)
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe, 
    deleteRecipe,
    updateRecipe
}