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
        name: type.STRING(50),
        sku: type.STRING(8),
        gb_image_link: type.STRING(256),
        keywords: type.STRING(1024),
        stock: type.INTEGER,
        price: type.DECIMAL(8,2),
        local_image_link: type.STRING(256)
    })
}