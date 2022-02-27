const ServiceRepository = require('../repository/sequelize/ServiceRepository');
const ClientRepository = require('../repository/sequelize/ClientRepository');
const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');

exports.showServiceList =(req,res, next) => {
    ServiceRepository.getServices()
    .then(sers => {
        res.render('pages/service/list',{
            sers: sers,
            navLocation: 'ser'
        });
    });
    
}

exports.showAddServiceForm = (req, res, next) => {
    let allEmps, allClts;
    const validationErrors=[];
    EmployeeRepository.getEmployees()
        .then(emps => {
            allEmps = emps;
            return ClientRepository.getClients();
        })
        .then(clts => {
            allClts = clts;
            res.render('pages/service/form', {
                ser: {},
                formMode: 'createNew',
                allEmps: allEmps,
                allClts: allClts,
                pageTitle: 'Nowe usługi',
                btnLabel: 'Dodaj usługę',
                formAction: '/services/add',
                navLocation: 'ser',
                validationErrors: validationErrors
            });
        });
}

/*
exports.showEditServiceForm = (req, res, next) => {
    const allClts,allEmps,allSers
    const serId = req.params.serId;
    ServiceRepository.getServiceById(serId)
        .then(ser => {
            res.render('pages/service/form', {
                ser: ser,
                formMode: 'edit',
                pageTitle: 'Edycja usługi',
                btnLabel: 'Edytuj usługe',
                formAction: '/services/edit',
                navLocation: 'ser'
            });
        });
};
*/

exports.showServiceDetails = (req, res, next) => {
    let allClts,allEmps,allSers;
    const serId = req.params.serId;
    const validationErrors=[];
    ServiceRepository.getServiceById(serId)
    .then(sers => {
        allSers=sers;
        return ClientRepository.getClients();
    }).then(clts => {
        allClts=clts;
        return EmployeeRepository.getEmployees();
    }).then(emps => {
        allEmps = emps;
        res.render('pages/service/form', {
            ser: allSers,
            allEmps: allEmps,
            allClts:allClts,
            formMode: 'showDetails',
            pageTitle:'Szczegoły usługi',
            formAction: '',
            navLocation: 'ser',
            validationErrors: validationErrors
        });
    });
}

exports.showEditServiceForm =(req, res, next) => {
    let allClts,allEmps,allSers;
    const serId = req.params.serId;
    const validationErrors=[];
    ServiceRepository.getServiceById(serId)
    .then(sers => {
        allSers=sers;
        return ClientRepository.getClients();
    }).then(clts => {
        allClts=clts;
        return EmployeeRepository.getEmployees();
    }).then(emps => {
        allEmps = emps;
        res.render('pages/service/form', {
            ser: allSers,
            allEmps: allEmps,
            allClts: allClts,
            formMode: 'edit',
            pageTitle:'Edytuj usługi',
            btnLabel: "Edytuj usługe",
            formAction: '/services/edit',
            navLocation: 'ser',
            validationErrors: validationErrors
        });
    });
}


exports.addService = (req, res, next) => {
    const serData = { ...req.body };
    ServiceRepository.createService(serData)
        .then( result => {
            res.redirect('/services');
        }).catch(err=> {
            console.log(err.errors);
            res.render('pages/service/form', {
                ser: serData,
                pageTitle: 'Dodaj Usługę',
                formMode: 'createNew',
                btnLabel: 'Dodaj usługe',
                formAction: '/services/add',
                navLocation: 'ser',
                validationErrors: err.errors
            });
        });
};

exports.updateService = (req, res, next) => {
    const serId = req.body._id;
const serData = { ...req.body };
ServiceRepository.updateService(serId, serData)
    .then( result => {
        res.redirect('/services');
    }).catch(err=> {
        console.log(err.errors);
        res.render('pages/service/form', {
            ser: serData,
            pageTitle: 'Edytuj Usługę',
            formMode: 'edit',
            btnLabel: 'Edytuj  usługe',
            formAction: '/services/add',
            navLocation: 'ser',
            validationErrors: err.errors
        });
    });
};

exports.deleteService = (req, res, next) => {
    const serId = req.params.serId;
ServiceRepository.deleteService(serId)
    .then( () => {
        res.redirect('/services');
    });
};
