const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');
router.get('/', serviceController.showServiceList);
router.get('/add', serviceController.showAddServiceForm);
router.get('/edit/:serId', serviceController.showEditServiceForm);
router.get('/details/:serId', serviceController.showServiceDetails);
router.post('/add', serviceController.addService); 
router.post('/edit', serviceController.updateService);
router.get('/delete/:serId', serviceController.deleteService);

module.exports = router;