require('dotenv').config()

const express = require ('express')
const menuRouters = require('./routes/menus')

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

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port' , process.env.PORT)
})