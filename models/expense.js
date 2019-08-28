module.exports = (sequelize, type) => {
    return sequelize.define('expense', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        description varchar256
        cost float
        datetime_recorded datetime
        */
        description: {
            type: type.STRING(256),
            allowNull: false,
            validate: {
                notNull: { msg: "Expense description is required" }
            }
        },
        cost: {
            type: type.DECIMAL(8,2),
            allowNull: false,
            validate: {
                notNull: { msg: "Expense cost is required" }
            }
        },
        //datetime_recorded: type.DATE()
    })
}