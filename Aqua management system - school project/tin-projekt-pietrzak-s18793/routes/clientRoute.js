const express = require('express');
const router = express.Router();

const clientController = require('../controllers/clientController');
router.get('/', clientController.showClientList);
router.get('/add',clientController.showAddClientForm);
router.get('/edit/:cltId', clientController.showEditClientForm);
router.get('/details/:cltId', clientController.showClientDetails);
router.post('/add', clientController.addClient); 
router.post('/edit', clientController.updateClient);
router.get('/delete/:cltId', clientController.deleteClient);

module.exports = router;