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
        description: type.STRING(256),
        cost: type.DECIMAL(8,2),
        datetime_recorded: type.DATE()
    })
}