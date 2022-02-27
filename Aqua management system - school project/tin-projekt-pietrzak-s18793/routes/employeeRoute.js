const express = require('express');
const router = express.Router();
//pracownicy
const employeeController = require('../controllers/employeeController');
router.get('/', employeeController.showEmployeeList);
router.get('/add',employeeController.showAddEmployeeForm);
router.get('/edit/:empId', employeeController.showEditEmployeeForm);
router.get('/details/:empId', employeeController.showEmployeeDetails);
router.post('/add', employeeController.addEmployee); 
router.post('/edit', employeeController.updateEmployee);
router.get('/delete/:empId', employeeController.deleteEmployee);


module.exports = router;
