const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Vjezba = sequelize.define('vjezba', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    brojZadataka:{
        type:Sequelize.STRING
    }
})

module.exports = Vjezba