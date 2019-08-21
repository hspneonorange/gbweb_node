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
        name: type.STRING(50)
    })
}