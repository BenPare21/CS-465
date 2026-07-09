const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');

router.get('/', travelController.listTrips);
router.get('/trips', travelController.listTrips);

module.exports = router;