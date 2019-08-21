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
        first_name: type.STRING(50),
        last_name: type.STRING(50),
        username: type.STRING(50),
        password_hash: type.STRING(128),
        last_seen: type.DATE(),
        token: type.STRING(32),
        token_expiration: type.DATE()
    })
}