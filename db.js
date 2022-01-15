const Sequelize = require("sequelize");
const sequelize = require('./sequelize')

const db={};


db.Sequelize = Sequelize;  
db.sequelize = sequelize;


db.student = require('./models/student.js');
db.grupa = require('./models/grupa.js');




db.student.belongsToMany(db.grupa,{as:'grupe',through:'student_grupa',foreignKey:'student'});
db.grupa.belongsToMany(db.student,{as:'student',through:'student_grupa',foreignKey:'grupa'});




module.exports=db;