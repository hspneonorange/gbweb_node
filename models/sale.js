module.exports = (sequelize, type) => {
    return sequelize.define('sale', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        date datetime
        discount float
        notes varchar256
        */
        date: type.DATE(),
        discount: type.DECIMAL(8,2),
        notes: type.STRING(256)
    })
}