const Menu = require('../models/menuModel')
const Dish = require('../models/menuModel')
const mongoose = require('mongoose')

//get all menus
const getMenus = async (req, res) => {
    const user_id = req.user._id
    const menus = await Menu.find({ user_id }).sort({createAt: -1})
    res.status(200).json(menus)
}

// get a single menu
const getMenu = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such menu'})
    }
    const menu = await Menu.findById(id)
    if (!menu) {
        return res.status(404).json({error: 'No such menu'})
    }
    res.status(200).json(menu)
}

// create new menu
const createMenu = async (req, res) => {
    const {date, title, list} = req.body
    let emptyFields = []
    if(!date) {
        emptyFields.push('date')
    }
    if(!title) {
        emptyFields.push('title')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    // add doc to db
    try {
        const user_id = req.user._id
        const dishes = list.map((item) => ({
                title: item.name,
                amount: item.amount
            })
        )
        const menu = await Menu.create({date, title, dishes, user_id,})
        res.status(200).json(menu)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

// delete a menu
const deleteMenu = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such menu'})
    }
    const menu = await Menu.findOneAndDelete({_id: id})
    if (!menu) {
        return res.status(400).json({error: 'No such menu'})
    }
    res.status(200).json(menu)
}

// update a menu
const updateMenu = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such menu'})
    }
    const menu = await Menu.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    if (!menu) {
        return res.status(400).json({error: 'No such menu'})
    }
    res.status(200).json(menu)
}

module.exports = {
    getMenus,
    getMenu,
    createMenu, 
    deleteMenu,
    updateMenu
}