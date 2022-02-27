
const { VERSION } = require('ejs');
const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');

exports.showEmployeeList =(req,res, next) => {
    EmployeeRepository.getEmployees()
    .then(emps => {
        res.render('pages/employee/list',{
        emps: emps,
        navLocation: 'emp'
        });
    });
    
}

exports.showAddEmployeeForm = (req, res, next) => {
    const validationErrors =[];
    res.render('pages/employee/form', {
        emp: {},
        pageTitle: 'Nowy pracownik',
        formMode: 'createNew',
        btnLabel: 'Dodaj pracownika',
        formAction: '/employees/add',
        navLocation: 'emp',
        validationErrors: validationErrors
    });
}
/*
exports.showAddEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', {});}
*/


exports.showEditEmployeeForm = (req, res, next) => {
    const empId = req.params.empId;
    const validationErrors =[];
    EmployeeRepository.getEmployeeById(empId)
        .then(emp => {
            res.render('pages/employee/form', {
                emp: emp,
                formMode: 'edit',
                pageTitle: 'Edycja pracownika',
                btnLabel: 'Edytuj pracownika',
                formAction: '/employees/edit',
                navLocation: 'emp',
                validationErrors: validationErrors
            });
        });
};

exports.showEmployeeDetails = (req, res, next) => {
    const empId = req.params.empId;
    const validationErrors=[];
    EmployeeRepository.getEmployeeById(empId)
        .then(emp => {
            res.render('pages/employee/form', {
                emp: emp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pracownika',
                formAction: '',
                navLocation: 'emp',
                validationErrors: validationErrors
            });
        });
}


exports.addEmployee = (req, res, next) => {
    const empData = { ...req.body };
    EmployeeRepository.createEmployee(empData)
        .then( result => {
            res.redirect('/employees');
        }).catch(err=> {
            console.log(err.errors);
            res.render('pages/employee/form', {
                emp: empData,
                pageTitle: 'Dodaj Pracownika',
                formMode: 'createNew',
                btnLabel: 'Dodaj Pracownika',
                formAction: '/employees/add',
                navLocation: 'emp',
                validationErrors: err.errors
            });
        });
};

exports.updateEmployee = (req, res, next) => {
    const empId = req.body._id;
const empData = { ...req.body };
EmployeeRepository.updateEmployee(empId, empData)
    .then( result => {
        res.redirect('/employees');
    }).catch(err=> {
        console.log(err.errors);
        res.render('pages/employee/form', {
            emp: empData,
            pageTitle: 'Edytuj Pracownika',
            formMode: 'edit',
            btnLabel: 'Edytuj Pracownika',
            formAction: '/employees/edit',
            navLocation: 'emp',
            validationErrors: err.errors
        });
    });
};
exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.empId;
EmployeeRepository.deleteEmployee(empId)
    .then( () => {
        res.redirect('/employees');
    });
};

/*
exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/employee/details', {});
}
*/