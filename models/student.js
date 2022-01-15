const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Student = sequelize.define('student', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    ime:{
        type:Sequelize.STRING
    },
    prezime:{
        type:Sequelize.STRING
    },
    indeks:{
        type:Sequelize.INTEGER
    }
})

module.exports = Student