const Sequelize = require("sequelize");
const sequelize = require('./sequelize')

const db={};


db.Sequelize = Sequelize;  
db.sequelize = sequelize;


db.student = require('./models/student.js');
db.grupa = require('./models/grupa.js');

db.zadatak = require('./models/zadatak.js');
db.vjezba = require('./models/vjezba.js');

/*db.student_grupa = sequelize.define('student_grupa', {
    studentId: {
        type:Sequelize.INTEGER
    },
    grupaId: {
        type:Sequelize.INTEGER
      }
  });*/

// ?? ne valja, student pripada jednoj grupi a grupa ima vise studenata, na osnovu metode postaviGrupu

db.student.belongsToMany(db.grupa,{as:'grupe',through:'student_grupa',foreignKey:'studentId'});
db.grupa.belongsToMany(db.student,{as:'studenti',through:'student_grupa',foreignKey:'grupaId'});

db.zadatak.belongsToMany(db.vjezba,{as:'vjezbe',through:'zadatak_vjezba',foreignKey:'zadatakId'});
db.vjezba.belongsToMany(db.zadatak,{as:'zadaci',through:'zadatak_vjezba',foreignKey:'vjezbaId'});

/* 
db.grupa.hasMany(db.student, {
    as:'student', foreignKey: 'grup'
});

db.student.belongsTo(db.grupa,{ as: 'grupa' });*/


module.exports=db;


