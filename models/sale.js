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
        //date: type.DATE(),
        discount: {
            type: type.DECIMAL(8,2),
            allowNull: false,
            validate: {
                notNull: { msg: "Sale discount is required" }
            }
        },
        notes: type.STRING(256)
    })
}