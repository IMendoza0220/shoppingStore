var config = require('./config/config.json')
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var dbEnv = config[env];

console.log(dbEnv);

// var sequelizeConnection = new Sequelize("shoppingdb", "root", process.env.password, {
//     host: "localhost",
//     dialect: "mysql",
//     //pool is the amount of connections sequelize can keep open
//     pool: {
//         min: 0,
//         max: 5
//     }
// });

if (process.env[dbEnv.use_env_variable]) {
    sequelizeConnection = new Sequelize(process.env[dbEnv.use_env_variable]);
} else {
    sequelizeConnection = new Sequelize({
        "username": "root",
        "password": process.env.password,
        "database": "shoppingdb",
        "host": "localhost",
        "port": 3306,
        "dialect": "mysql"
      }) 
};



//objects defining each table
var User = sequelizeConnection.define("users", {
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

var Product = sequelizeConnection.define("products", {
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
    },
    picture: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

var Customer = sequelizeConnection.define("customers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//method that creates database using object definitions
sequelizeConnection.sync()
    .then(function() {
        console.log("Database has been synced");
    })
    .catch(function(err){
        console.error("Error creating database");
    });

exports = module.exports = {
    User,
    Product,
    Customer,
    Sequelize,
    sequelizeConnection
};