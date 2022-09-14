//DEPENDENCIES
require("dotenv").config();
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


const express = require("express")
const app = express()

const mongoose = require('mongoose')


const connection = require('./models/index.js')

const moduleController = require('./controllers/module-controller.js')

const cors = require('cors')
const morgan = require('morgan')


mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("TConnection is successful"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));

//MIDDLEWARE
app.use(express.json())
app.use(cors)
app.use(morgan("dev"))
app.use('/modules', moduleController)

//ROUTES
app.get('/', (req,res) => {
    res.send('Hello World!')
})
console.log(PORT)

//LISTENER
app.listen(PORT => {
    console.log(`listening at PORT: ${PORT}`)
})