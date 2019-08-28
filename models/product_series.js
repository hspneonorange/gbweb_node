module.exports = (sequelize, type) => {
    return sequelize.define('product_series', {
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
                notNull: { msg: "Product series name is required" }
            }
        },
    })
}