const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Grupa = sequelize.define('grupa', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    naziv:{
        type:Sequelize.STRING
    }
})

module.exports = Grupa