const Sequelize = require("sequelize");
const sequelize = require('./sequelize')

const db={};


db.Sequelize = Sequelize;  
db.sequelize = sequelize;


db.student = require('./models/student.js');
db.grupa = require('./models/grupa.js');

/*db.student_grupa = sequelize.define('student_grupa', {
    studentId: {
        type:Sequelize.INTEGER
    },
    grupaId: {
        type:Sequelize.INTEGER
      }
  });*/

//ne valja, student pripada jednoj grupi a grupa ima vise studenata, na osnovu metode postaviGrupu

db.student.belongsToMany(db.grupa,{as:'grupe',through:'student_grupa',foreignKey:'studentId'});
db.grupa.belongsToMany(db.student,{as:'studenti',through:'student_grupa',foreignKey:'grupaId'});

/* 
db.grupa.hasMany(db.student, {
    as:'student', foreignKey: 'grup'
});

db.student.belongsTo(db.grupa,{ as: 'grupa' });*/


module.exports=db;


