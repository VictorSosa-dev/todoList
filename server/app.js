require('dotenv').config()

const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const routers = require('./routes/index.routes.js')
const sequelize = require('./config/db.js')

app.use(helmet()) // security Basic config
app.use(cors()) // enable cors
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
try {
    sequelize.authenticate();
    sequelize.sync({ force: false });
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}
const port = process.env.PORT || 3000

// Routes
app.use('/', routers)

app.listen(port, () => console.log(`http://localhost:${port}`))