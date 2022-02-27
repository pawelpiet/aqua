const express = require('express');
const router = express.Router();

const cltApiController = require('../../api/ClientAPI');

router.get('/', cltApiController.getClients);
router.get('/:cltId', cltApiController.getClientById);
router.post('/', cltApiController.createClient);
router.put('/:cltId', cltApiController.updateClient);
router.delete('/:cltId', cltApiController.deleteClient);

module.exports = router;