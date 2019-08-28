module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        first_name varchar50
        last_name varchar50
        username varchar50
        password_hash varchar128
        last_seen datetime
        token varchar32
        token_expiration datetime
        */
        first_name: {
            type: type.STRING(50),
            allowNull: false
        },
        last_name: {
            type: type.STRING(50),
            allowNull: false
        },
        username: {
            type: type.STRING(50),
            allowNull: false
        },
        password_hash: {
            type: type.STRING(128),
            allowNull: false
        },
        last_seen: {
            type: type.DATE(),
            allowNull: false
        },
        token: type.STRING(32),
        token_expiration: type.DATE()
    })
}