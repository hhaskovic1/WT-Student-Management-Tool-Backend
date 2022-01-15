const Sequelize = require("sequelize");
const sequelize = new Sequelize("mydb","username","",{host:"localhost",dialect:"mysql",logging:false});

module.exports = sequelize