module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            underscored: true
        },
        /*
        name varchar50
        sku varchar8
        gb_image_link varchar256
        keywords varchar1024
        stock int11
        price float
        local_image_link varchar256
        */
        name: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                notNull: { msg: "Product name is required" }
            }
        },
        sku: type.STRING(8),
        gb_image_link: type.STRING(256),
        keywords: {
            type: type.STRING(1024),
            allowNull: false,
            validate: {
                notNull: { msg: "Product keywords are required" }
            }
        },
        stock: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: "Product stock is required" }
            }
        },
        price: {
            type: type.DECIMAL(8,2),
            allowNull: false,
            validate: {
                notNull: { msg: "Product price is required" }
            }
        },
        local_image_link: type.STRING(256)
    })
}