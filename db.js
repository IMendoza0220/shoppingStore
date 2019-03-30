var Sequelize = require("sequelize");
var db = new Sequelize("shoppingdb", "root", "amorales80", {
    host: "localhost",
    dialect: "mysql",
    //pool is the amount of connections sequelize can keep open
    pool: {
        min: 0,
        max: 5
    }
});

//objects defining each table
var User = db.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

var Product = db.define("products", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
});

//method that creates database using object definitions
db.sync()
    .then(function() {
        console.log("Database has been synced")
    })
    .catch(function(err){
        console.error("Error creating database")
    });

exports = module.exports = {
    User,
    Product
};