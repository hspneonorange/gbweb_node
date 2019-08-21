module.exports = (sequelize, type) => {
    return sequelize.define('sale_line_item', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        num_sold int11
        sale_price float
        */
        num_sold: type.INTEGER,
        sale_price: type.DECIMAL(8,2)
    })
}