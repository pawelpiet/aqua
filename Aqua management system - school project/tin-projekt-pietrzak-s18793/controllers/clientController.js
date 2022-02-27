const ClientRepository = require('../repository/sequelize/ClientRepository');

exports.showClientList =(req,res, next) => {
    ClientRepository.getClients()
    .then(clts => {
        res.render('pages/client/list',{
        clts: clts,
        navLocation: 'clt'
        });
    });
}

exports.showAddClientForm =(req,res, next) => {
    const validationErrors =[];
    res.render('pages/client/form', {
        clt: {},
        pageTitle: 'Nowy klient',
        formMode: 'createNew',
        btnLabel: 'Dodaj klienta',
        formAction: '/clients/add',
        navLocation: 'clt',
        validationErrors: validationErrors
    });
}

exports.showEditClientForm = (req, res, next) => {
    const cltId = req.params.cltId;
    const validationErrors =[];
    ClientRepository.getClientById(cltId)
        .then(clt => {
            res.render('pages/client/form', {
                clt: clt,
                formMode: 'edit',
                pageTitle: 'Edycja klienta',
                btnLabel: 'Edytuj klienta',
                formAction: '/clients/edit',
                navLocation: 'clt',
                validationErrors: validationErrors
            });
        });
};

exports.showClientDetails =(req,res, next) => {
    const cltId = req.params.cltId;
    const validationErrors =[];
    ClientRepository.getClientById(cltId)
        .then(clt => {
            res.render('pages/client/form', {
                clt: clt,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły klienta',
                formAction: '',
                navLocation: 'clt',
                validationErrors: validationErrors
            });
        });
}


exports.addClient = (req, res, next) => {
    const cltData = { ...req.body };
    ClientRepository.createClient(cltData)
        .then( result => {
            res.redirect('/clients');
        }).catch(err=> {
            console.log(err.errors);
            res.render('pages/client/form', {
                clt: cltData,
                pageTitle: 'Dodaj Klienta',
                formMode: 'createNew',
                btnLabel: 'Dodaj Klienta',
                formAction: '/clients/add',
                navLocation: 'clt',
                validationErrors: err.errors
            });
        });
};

exports.updateClient = (req, res, next) => {
    const cltId = req.body._id;
const cltData = { ...req.body };
ClientRepository.updateClient(cltId, cltData)
    .then( result => {
        res.redirect('/clients');
    }).catch(err=> {
        console.log(err.errors);
        res.render('pages/client/form', {
            clt: cltData,
            pageTitle: 'Edytuj Klienta',
            formMode: 'edit',
            btnLabel: 'Edytuj klienta',
            formAction: '/clients/add',
            navLocation: 'clt',
            validationErrors: err.errors
        });
    });
};

exports.deleteClient = (req, res, next) => {
    const cltId = req.params.cltId;
ClientRepository.deleteClient(cltId)
    .then( () => {
        res.redirect('/clients');
    });
};
