const express = require('express')
const bodyParser = require('body-parser')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

const {
    Commission,
    Event,
    Expense,
    ProductSeries,
    ProductType,
    Product,
    SaleLineItem,
    Sale,
    User
} = require('./sequelize')

const app = express()
app.use(bodyParser.json())

//API endpoints go here
// app.post('/api/users', (req, res) => {
//     User.create(req.body)
//         .then(user => res.json(user))
// })

// app.get('/api/users', (req, res) => {
//     User.findAll().then(users => res.json(users))
// })

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})