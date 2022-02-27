const Sequelize =  require('sequelize');

const sequelize = new Sequelize('AquaDb', 'root','root', {
    dialect:'mysql', host:'localhost'
});

module.exports = sequelize;
