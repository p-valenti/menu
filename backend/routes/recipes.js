const express = require('express')
const {
    createRecipe,
    getRecipes,
    getRecipe,
    deleteRecipe,
    updateRecipe
} = require('../controllers/recipeController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()
// require auth for all menu routes
router.use(requireAuth)

// GET all Recipes
router.get('/recipes', getRecipes)

// GET a single Recipe
router.get('/recipes/:id', getRecipe)

//POST a new Recipe
router.post('/recipes', createRecipe)

//DELETE a Recipe
router.delete('/recipes/:id', deleteRecipe)

//UPDATE a Recipe
router.patch('/recipes/:id', updateRecipe)

module.exports = router