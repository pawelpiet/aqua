const sequelize = require('./sequelize');

const Employee =  require('../../model/sequelize/Employee');
const Client =  require('../../model/sequelize/Client');
const Service =  require('../../model/sequelize/Service');

module.exports = () => {
    Employee.hasMany(Service, {as: 'services', foreignKey: {name: 'emp_id', allowNull: false},
     constraints: true, onDelete: 'CASCADE'});
    Service.belongsTo(Employee, {as: 'employee', foreignKey: {name:'emp_id',allowNull: false}});
    Client.hasMany(Service, {as: 'services', foreignKey: {name: 'clt_id', allowNull: false},
    constraints: true, onDelete: 'CASCADE'});
    Service.belongsTo(Client, {as: 'client', foreignKey: {name:'clt_id',allowNull: false}});
   
   
    let allEmps, allClts;


    return sequelize
        .sync({force: true})
        .then( () => {
            return Employee.findAll();
        })
        .then(emps => {
            if( !emps || emps.length == 0 ) {
                return Employee.bulkCreate([
                    {firstName: 'Jan', lastName: 'Kowalski',staz: 'dwa lata', email: 'jan.kowalski@aqua.com'},
                    {firstName: 'Adam', lastName: 'Zieliński',staz: 'pół roku', email: 'adam.zielinski@aqua.com'},
                    {firstName: 'Marian', lastName: 'Nowak',staz: 'Osiem lat', email: 'marian.nowak@aqua.com'},
                ])
                .then( () => {
                    return Employee.findAll();
                });
            } else {
                return emps;
            }
        })
        .then( emps => {
            allEmps = emps;
            return Client.findAll();
        })
        .then( clt => {
            if( !clt || clt.length == 0 ) {
                return Client.bulkCreate([
                    {firstName: 'Paweł', lastName: 'Pietrzak',typAkwarium: 'słodkowodne',iloscLitrow: 112, iloscRyb: 30},
                    {firstName: 'Witold', lastName: 'Koper',typAkwarium: 'Słonowodne',iloscLitrow: 400, iloscRyb: 5},
                    {firstName: 'Joanna', lastName: 'Kowal',typAkwarium: 'słodkowodne',iloscLitrow: 62, iloscRyb: 10}
                ])
                .then( () => {
                    return Employee.findAll();
                });
            } else {
                return clt;
            }
        })
        .then( clt => {
            allClts = clt;
            return Service.findAll();
        })
        .then( ser => {
            if( !ser || ser.length == 0 ) {
                return Service.bulkCreate([
                    {emp_id: allEmps[0]._id, clt_id: allClts[0]._id, opis: 'Wymiana filtra', date: '2001-01-01', cena: 100},
                    {emp_id: allEmps[1]._id, clt_id: allClts[0]._id, opis: 'Zalożenie Akwarium', date: '2020-10-01', cena: 550},
                    {emp_id: allEmps[0]._id, clt_id: allClts[1]._id,  opis: 'sadzenie trawnika', date: '2011-11-11', cena: 100}
                ]);
            } else {
                return ser;
            }
        });
};
