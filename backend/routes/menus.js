const express = require('express')
const {
    createMenu,
    getMenus,
    getMenu,
    deleteMenu,
    updateMenu
} = require('../controllers/menuController')

const router = express.Router()

// GET all menus
router.get('/', getMenus)

// GET a single menu
router.get('/:id', getMenu)

//POST a new menu
router.post('/', createMenu)

//DELETE a menu
router.delete('/:id', deleteMenu)

//UPDATE a menu
router.patch('/:id', updateMenu)

module.exports = router