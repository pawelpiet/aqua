const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Client = sequelize.define('Client', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   firstName: {
       type: Sequelize.STRING,
       allowNull: false, 
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [2,60],
            msg: "Pole powinno zawierać od 2 do 60 znaków"
        },
    }
},
   lastName: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [2,60],
            msg: "Pole powinno zawierać od 2 do 60 znaków"
        },
    }
},
   typAkwarium: {
       type: Sequelize.STRING,
       allowNull: false,
       
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [2,60],
            msg: "Pole powinno zawierać od 2 do 60 znaków"
        },
    }
},
   iloscLitrow: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate:{
        notEmpty:{
           msg: "Pole jest wymagane"
        }
    }
     
   },
   iloscRyb: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate:{
        notEmpty:{
           msg: "Pole jest wymagane"
        }
    }
     
   }
});

module.exports = Client;