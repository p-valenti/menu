require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const menuRouters = require('./routes/menus')
const userRouters = require('./routes/user')
const recipeRouters = require('./routes/recipes')

// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/menus', menuRouters)
app.use('/api/recipes', recipeRouters)
app.use('/api/user', userRouters)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port' , process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

