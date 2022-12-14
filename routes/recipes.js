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
router.get('/', getRecipes)

// GET a single Recipe
router.get('/:id', getRecipe)

//POST a new Recipe
router.post('/', createRecipe)

//DELETE a Recipe
router.delete('/:id', deleteRecipe)

//UPDATE a Recipe
router.patch('/:id', updateRecipe)

module.exports = router