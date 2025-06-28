const express = require('express');

const { CityController } = require('../../controllers');
const { CityMidleware } = require('../../middlewares')

const router = express.Router();

router.post('/', CityMidleware.validateCreateRequest, CityController.createCity);
router.delete('/:id', CityController.destroyCity);
router.patch('/:id', CityMidleware.validateCreateRequest, CityController.updateCity);

module.exports = router;