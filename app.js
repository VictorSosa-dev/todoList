require('dotenv').config()

const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const routers = require('./routes/index.routes.js')

app.use(helmet()) // security Basic config
app.use(cors()) // enable cors
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = process.env.PORT || 3000

// Routes
app.use('/', routers)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))