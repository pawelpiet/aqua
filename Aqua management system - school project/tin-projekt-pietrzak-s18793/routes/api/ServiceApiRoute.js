const express = require('express');
const router = express.Router();

const serApiController = require('../../api/ServiceAPI');

router.get('/', serApiController.getServices);
router.get('/:serId', serApiController.getServiceById);
router.post('/', serApiController.createSevice);
router.put('/:serId', serApiController.updateService);
router.delete('/:serId', serApiController.deleteService);

module.exports = router;