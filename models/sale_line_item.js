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
        num_sold: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: "Sale line item number sold is required" }
            }
        },
        sale_price: {
            type: type.DECIMAL(8,2),
            allowNull: false,
            validate: {
                notNull: { msg: "Sale line item price is required" }
            }
        },
    })
}