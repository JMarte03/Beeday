const express = require('express')
const app = express()
const connectDB = require('./config/database')
const todoRoutes = require('./routes/todo')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running.')
})    