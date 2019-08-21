module.exports = (sequelize, type) => {
    return sequelize.define('event', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        name varchar50
        start_date datetime
        end_date datetime
        city varchar50
        state_abbr varchar2
        */
        name: type.STRING(50),
        start_date: type.DATE(),
        end_date: type.DATE(),
        city: type.STRING(50),
        state_abbr: type.STRING(2)
    })
}