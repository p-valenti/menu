const express = require('express')
const Menu = require('../models/menuModel')

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
router.post('/', async (req, res) => {
    const {title, amount} = req.body
    try {
        const menu = await Menu.create({title, amount})
        res.status(200).json(menu)
    } catch (error){
        res.status(400).json({error: error.message})
    }
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