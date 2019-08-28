module.exports = (sequelize, type) => {
    return sequelize.define('product_type', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        name varchar50
        */
        name: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                notNull: { msg: "Product type name is required" }
            }
        }
    })
}