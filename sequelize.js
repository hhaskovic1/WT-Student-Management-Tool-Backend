const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt2117717","WT2117717","password",{host:"localhost",dialect:"mysql",logging:false});

module.exports = sequelize