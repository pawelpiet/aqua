const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Service = sequelize.define('Service', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
   },
   emp_id: {
    type: Sequelize.INTEGER,
    allowNull: false
},
   clt_id: {
     type: Sequelize.INTEGER,
     allowNull: false
 },
   opis: {
       type: Sequelize.STRING,
       allowNull: false
   },
   date: {
       type: Sequelize.DATE,
       allowNull: false
   },
    cena: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
   
});

module.exports = Service;