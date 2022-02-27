const Sequelize = require('sequelize');

const Employee = require('../../model/sequelize/Employee');
const Client = require('../../model/sequelize/Client');
const Service = require('../../model/sequelize/Service');


exports.getServices = () => {
    return Service.findAll({include: [
        {
            model: Employee,
            as: 'employee'
        },
        {
            model: Client,
            as: 'client'
        }
    ]});
};

exports.getServiceById = (serId) => {
    return Service.findByPk(serId, {include: [
        {
        model: Employee,
        as: 'employee'
    },
    {
        model: Client,
        as: 'client'
    }]
});
};

exports.createService =(data) => {
    console.log(JSON.stringify(data));

    return Service.create({
        emp_id: data.emp_id,
        clt_id: data.clt_id,
        opis: data.opis,
        date: data.date,
        cena: data.cena

    });
};

exports.updateService = (serId, data) => {
    const emp_id = data.emp_id;
    const clt_id = data.clt_id;
    const opis = data.opis;
    const date = data.date;
    const cena = data.cena;
    return Service.update(data, {where: {_id: serId}});
};

exports.deleteService = (serId) => {
    return Service.destroy({
        where: {_id: serId}
    });
};

exports.deleteManyServices =(serId) =>{
    return Service.find({_id:{[Sequelize.Op.in]:serId}});
}