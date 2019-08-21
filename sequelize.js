const Sequelize = require('sequelize')
const CommissionModel = require('./models/commission')
const EventModel = require('./models/event')
const ExpenseModel = require('./models/expense')
const ProductTypeModel = require('./models/product_type')
const ProductSeriesModel = require('./models/product_series')
const ProductModel = require('./models/event')
const SaleLineItemModel = require('./models/sale_line_item')
const SaleModel = require('./models/sale')
const UserModel = require('./models/user')

const sequelize = new Sequelize('gbwebnode','root','Baby1c@t', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        underscored: true
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const User = UserModel(sequelize, Sequelize)
const Commission = CommissionModel(sequelize, Sequelize)
const Event = EventModel(sequelize, Sequelize)
const Expense = ExpenseModel(sequelize, Sequelize)
const ProductType = ProductTypeModel(sequelize, Sequelize)
const ProductSeries = ProductSeriesModel(sequelize, Sequelize)
const Product = ProductModel(sequelize, Sequelize)
const SaleLineItem = SaleLineItemModel(sequelize, Sequelize)
const Sale = SaleModel(sequelize, Sequelize)

//product
Product.belongsTo(ProductType);
Product.belongsTo(ProductSeries);
Product.hasMany(SaleLineItem);

//product type
ProductType.hasMany(Product);

//product series
ProductSeries.hasMany(Product);

//commission
Commission.belongsTo(Event);
Commission.belongsTo(User);

//event
Event.hasMany(Commission);
Event.hasMany(Expense);
Event.hasMany(Sale);

//expense
Expense.belongsTo(Event);
Expense.belongsTo(User);

//sale
Sale.belongsTo(Event);
Sale.belongsTo(User);
Sale.hasMany(SaleLineItem);

//sale line item
SaleLineItem.belongsTo(Sale);
SaleLineItem.belongsTo(Product);

//user
User.hasMany(Commission);
User.hasMany(Expense);
User.hasMany(Sale);

//set to false after db structure matches what we want
sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created ôwõ')
    })

module.exports = {
    Commission,
    Event,
    Expense,
    Sale,
    User,
    SaleLineItem,
    ProductSeries,
    ProductType,
    Product
}