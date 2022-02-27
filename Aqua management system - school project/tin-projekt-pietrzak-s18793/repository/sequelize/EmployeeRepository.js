

const Employee = require("../../model/sequelize/Employee");
const Client = require("../../model/sequelize/Client");
const Service = require("../../model/sequelize/Service");

exports.getEmployees = () => {
    return Employee.findAll();
};

exports.getEmployeeById =(empId) => {
    return Employee.findByPk(empId,
        {
            include: [{
                model: Service,
                as: 'services',
                include: [{
                    model: Client,
                    as: 'client'
                }]
            }]
        });
};

exports.createEmployee = (newEmpData) => {
    return Employee.create({
        firstName: newEmpData.firstName,
        lastName: newEmpData.lastName,
        staz: newEmpData.staz,
        email: newEmpData.email
    });
};

exports.updateEmployee =(empId, empData) => {
    const firstName = empData.firstName;
    const lastName = empData.lastName;
    const staz = empData.staz;
    const email= empData.email;
    return Employee.update(empData, {where: {_id: empId}});
};


exports.deleteEmployee = (empId) => {
    return Employee.destroy({
        where: { _id: empId }
    });
};