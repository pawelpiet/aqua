const ServiceRepository = require('../repository/sequelize/ServiceRepository');

exports.getServices = (req, res, next) => {
    ServiceRepository.getServices()
        .then(sers => {
            res.status(200).json(sers);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getServiceById = (req, res, next) => {
    const serId = req.params.serId;
    ServiceRepository.getServiceById(serId)
        .then(ser => {
            if(!ser) {
                res.status(404).json({
                    message: 'Employee with id: '+serId+' not found'
                })
            } else {
                res.status(200).json(ser);
            }
        });
};

exports.createSevice = (req, res, next) => {
    ServiceRepository.createSevice(req.body)
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

exports.updateService = (req, res, next) => {
    const serId = req.params.serId;
    ServiceRepository.updateService(serId, req.body)
        .then(result => {
           res.status(200).json({message: 'Service updated!', emp: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteService = (req, res, next) => {
    const serId = req.params.serId;
    ServiceRepository.deleteService(serId)
        .then(result => {
            res.status(200).json({message: 'Removed service', emp: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};