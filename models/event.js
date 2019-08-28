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
        name: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                notNull: { msg: "Event name is required" }
            }
        },
        start_date: {
            type: type.DATE(),
            allowNull: false,
            validate: {
                notNull: { msg: "Event start date is required" }
            }
        },
        end_date: {
            type: type.DATE(),
            allowNull: false,
            validate: {
                notNull: { msg: "Event end date is required" }
            }
        },
        city: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                notNull: { msg: "Event city is required" }
            }
        },
        state_abbr: {
            type: type.STRING(2),
            allowNull: false,
            validate: {
                notNull: { msg: "Event state is required" }
            }
        },
    })
}