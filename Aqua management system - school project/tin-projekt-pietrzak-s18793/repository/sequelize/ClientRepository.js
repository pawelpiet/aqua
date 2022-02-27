const Employee = require('../../model/sequelize/Employee');
const Client = require('../../model/sequelize/Client');
const Service = require('../../model/sequelize/Service');


exports.getClients = () => {
    return Client.findAll();
};

exports.getClientById =(cltId) => {
    return Client.findByPk(cltId,
        {
            include: [{
                model: Service,
                as: 'services',
                include: [{
                    model: Employee,
                    as: 'employee'
                }]
            }]
        });
};

exports.createClient = (newCltData) => {
    return Client.create({
        firstName: newCltData.firstName,
        lastName: newCltData.lastName,
        typAkwarium: newCltData.typAkwarium,
        iloscLitrow: newCltData.iloscLitrow,
        iloscRyb: newCltData.iloscRyb
    });
};

exports.updateClient =(cltId, cltData) => {
    const firstName = cltData.firstName;
    const lastName = cltData.lastName;
    const typAkwarium = cltData.typAkwarium;
    const iloscLitrow= cltData.iloscLitrow;
    const iloscRyb = cltData.iloscRyb;
    return Client.update(cltData, {where: {_id: cltId}});
};


exports.deleteClient = (cltId) => {
    return Client.destroy({
        where: {_id: cltId}
    });
};