module.exports = (sequelize, type) => {
    return sequelize.define('commission', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        datetime_recorded datetime
        commissioner_name varchar50
        commissioner_email varchar50
        commissioner_phone varchar10
        street_address varchar50
        address_city varchar50
        address_state_abbr varchar2
        address_zip varchar9
        commission_details varchar1024
        price float
        amt_paid float
        completed bool/tinyint
        */
        //datetime_recorded: type.DATE(),
        commissioner_name: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                notNull: { msg: "Commissioner name is required" }
            }
        },
        commissioner_email: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                notNull: { msg: "Commissioner email is required" }
            }
        },
        commissioner_phone: type.STRING(10),
        street_address: type.STRING(50),
        address_city: type.STRING(50),
        address_state_abbr: type.STRING(2),
        address_zip: type.STRING(9),
        commission_details: {
            type: type.STRING(1024),
            allowNull: false,
            validate: {
                notNull: { msg: "Commission details are required" }
            }
        },
        price: {
            type: type.DECIMAL(8,2),
            allowNull: false,
            validate: {
                notNull: { msg: "Commission price is required" }
            }
        },
        amt_paid: {
            type: type.DECIMAL(8,2),
            allowNull: false,
            validate: {
                notNull: { msg: "Commission amount paid is required" }
            }
        },
        completed: {
            type: type.BOOLEAN(),
            allowNull: false,
            validate: {
                notNull: { msg: "Commission completion status is required" }
            }
        },
    })
}