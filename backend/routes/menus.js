const express = require('express')

const router = express.Router()

// GET all menus
router.get('/', (req, res) => {
    res.json({mssg: 'GET all menus'})
})

// GET a single menu
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single menu'})
})

//POST a new menu
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new menu'})
})

//DELETE a menu
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a menu'})
})

//UPDATE a menu
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a menu'})
})

module.exports = router