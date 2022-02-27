const ClientRepository = require('../repository/sequelize/ClientRepository');

exports.getClients = (req, res, next) => {
    ClientRepository.getClients()
        .then(emps => {
            res.status(200).json(emps);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getClientById = (req, res, next) => {
    const cltId = req.params.cltId;
    ClientRepository.getClientById(cltId)
        .then(clt => {
            if(!clt) {
                res.status(404).json({
                    message: 'Client with id: '+cltId+' not found'
                })
            } else {
                res.status(200).json(clt);
            }
        });
};

exports.createClient = (req, res, next) => {
    ClientRepository.createClient(req.body)
        .then(newObj => {
           res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateClient = (req, res, next) => {
    const cltId = req.params.cltId;
    ClientRepository.updateClient(cltId, req.body)
        .then(result => {
           res.status(200).json({message: 'Client updated!', emp: result}); //bylo emp:...
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteClient = (req, res, next) => {
    const cltId = req.params.cltId;
    ClientRepository.deleteClient(cltId)
        .then(result => {
            res.status(200).json({message: 'Removed client', emp: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};