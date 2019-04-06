module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("products", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: DataTypes.STRING,
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0
        },
        picture: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });
    return Product;
  };