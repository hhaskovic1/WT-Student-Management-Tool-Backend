const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Zadatak = sequelize.define('zadatak', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
})

module.exports = Zadatak