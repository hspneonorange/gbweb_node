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

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

//COMMISSIONS
app.post('/api/commissions', (req, res) => {
    Commission.create(req.body)
        .then(commission => res.json(commission))
})

app.get('/api/commissions', (req, res) => {
    Commission.findAll().then(commissions => res.json(commissions))
})

app.get('/api/commissions/:id?', (req, res) => {
    Commission.findAll({ where: { id: req.params.id } }).then(commissions => res.json(commissions))
})

app.delete('/api/commissions/:id?', (req, res) => {
    Commission.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/commissions/:id?', (req, res) => {
    Commission.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//EVENTS
app.post('/api/events', (req, res) => {
    Event.create(req.body)
        .then(events => res.json(events))
})

app.get('/api/events', (req, res) => {
    Event.findAll().then(events => res.json(events))
})

app.get('/api/events/:id?', (req, res) => {
    Event.findAll({ where: { id: req.params.id } }).then(events => res.json(events))
})

app.delete('/api/events/:id?', (req, res) => {
    Event.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/events/:id?', (req, res) => {
    Event.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//EXPENSES
app.post('/api/expenses', (req, res) => {
    Expense.create(req.body)
        .then(expenses => res.json(expenses))
})

app.get('/api/expenses', (req, res) => {
    Expense.findAll().then(expenses => res.json(expenses))
})

app.get('/api/expenses/:id?', (req, res) => {
    Expense.findAll({ where: { id: req.params.id } }).then(expenses => res.json(expenses))
})

app.delete('/api/expenses/:id?', (req, res) => {
    Expense.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/expenses/:id?', (req, res) => {
    Expense.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//PRODUCT_SERIES
app.get('/api/product_series', (req, res) => {
    ProductSeries.findAll().then(product_series => res.json(product_series))
})

app.get('/api/product_series/:id?', (req, res) => {
    ProductSeries.findAll({ where: { id: req.params.id } }).then(product_series => res.json(product_series)) //THIS is the correct syntax!
})

app.post('/api/product_series', (req, res) => {
    ProductSeries.create(req.body)
        .then(product_series => res.json(product_series))
})

app.delete('/api/product_series/:id?', (req, res) => {
    ProductSeries.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/product_series/:id?', (req, res) => {
    ProductSeries.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//PRODUCT_TYPES
app.post('/api/product_types', (req, res) => {
    ProductType.create(req.body)
        .then(product_types => res.json(product_types))
})

app.get('/api/product_types', (req, res) => {
    ProductType.findAll().then(product_types => res.json(product_types))
})

app.get('/api/product_types/:id?', (req, res) => {
    ProductType.findAll({ where: { id: req.params.id } }).then(product_types => res.json(product_types))
})

app.delete('/api/product_types/:id?', (req, res) => {
    ProductType.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/product_types/:id?', (req, res) => {
    ProductType.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//PRODUCTS
app.post('/api/products', (req, res) => {
    Product.create(req.body)
        .then(products => res.json(products))
})

app.get('/api/products', (req, res) => {
    // Product.findAll({ include: [
    //     { model: Product, where: { keyword: {[Op.substring]: req.body.search } } }
    // ]})
    // .then(products => res.json(products))

    Product.findAll().then(products => res.json(products))

    // if (req.body.search != "") {
    //     Product.findAll({ include: [
    //         { model: Product, where: { keyword: {[Op.substring]: req.body.search } } }
    //     ]})
    //     .then(products => res.json(products))
    // } else {
    //     Product.findAll().then(products => res.json(products))
    // }
})

app.get('/api/products/:id?', (req, res) => {
    Product.findAll({ where: { id: req.params.id } }).then(products => res.json(products))
})
//low_stock endpoint
//stock update endpoint, accepts "increase"/"decrease"
app.put('/api/stock/:product_id?/:stock_update?', (req, res) => {
    action = req.body.action;
    Product.update({
        updated_at: req.body.updated_at,
        //stock: stock += req.params.stock_update
    }, {
        where: { id: req.params.product_id }
    })
    if (action == "increment") {
        Product.increment(['stock',req.params.stock_update], { where: { id: req.params.product_id } })
    } else if (action == "decrement") {
        Product.decrement(['stock',req.params.stock_update], { where: { id: req.params.product_id } })
    }
})

app.delete('/api/products/:id?', (req, res) => {
    Product.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/products/:id?', (req, res) => {
    Product.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//SALE_LINE_ITEMS
app.post('/api/sale_line_items', (req, res) => {
    SaleLineItem.create(req.body)
        .then(sale_line_items => res.json(sale_line_items))
})

app.get('/api/sale_line_items', (req, res) => {
    SaleLineItem.findAll().then(sale_line_items => res.json(sale_line_items))
})

app.get('/api/sale_line_items/:id?', (req, res) => {
    SaleLineItem.findAll({ where: { id: req.params.id } }).then(sale_line_items => res.json(sale_line_items))
})

app.delete('/api/sale_line_items/:id?', (req, res) => {
    SaleLineItem.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/sale_line_items/:id?', (req, res) => {
    SaleLineItem.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//SALES
app.post('/api/sales', (req, res) => {
    Sale.create(req.body)
        .then(event => res.json(event))
})

app.get('/api/sales', (req, res) => {
    Sale.findAll().then(sales => res.json(sales))
})

app.get('/api/sales/:id?', (req, res) => {
    Sale.findAll({ where: { id: req.params.id } }).then(sales => res.json(sales))
})

app.delete('/api/sales/:id?', (req, res) => {
    Sale.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/sales/:id?', (req, res) => {
    Sale.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//USERS
//BCRYPT password hashing
app.post('/api/users', (req, res) => {
    User.create(req.body)
        .then(users => res.json(users))
})

app.get('/api/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})

app.get('/api/users/:id?', (req, res) => {
    User.findAll({ where: { id: req.params.id } }).then(users => res.json(users))
})

app.delete('/api/users/:id?', (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).send())
})

app.put('/api/users/:id?', (req, res) => {
    User.update({
        updated_at: req.body.updated_at
    }, {
        where: { id: req.params.id }
    })
})

//ANALYTICS
// app.get('/api/family_chores', (req, res) => {
//     Chore.findAll({ where: { TypeId: { [Op.ne]: 2 } },
//         include: [
//             {
//                 model: User
//             }
//         ]
//     })
//     .then (userchore => res.json(userchore))
// })
app.get('/api/analytics/:event_id?', (req, res) => {
    sales = Sale.findAll({ where: { event_id: req.params.event_id } ,
    include: [
        {
            model: SaleLineItem
        }
    ]})
    discounts = Sale.findAll({ where: { event_id: req.params.event_id } })
    
    var total_sales, total_discounts;
    for ( var i=1; i < sales.sale_line_items.length; i++) {
        total_sales += (sales.sale_line_items[i].sale_price*sales[i].num_sold)
    }
    for ( var i=1; i < discounts.length; i++) {
        total_discounts += discounts[i].discount
    }

    total = {
        'total': total_sales-total_discounts
    }

    return JSON.stringify(total)
    //jesus christ dude
})