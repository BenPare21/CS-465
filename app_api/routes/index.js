const express = require('express');
const router = express.Router();

// controller import (FIXED spelling + path)
const tripsController = require('../controllers/trips');

router.route('/trips')
  .get(tripsController.tripsList);

module.exports = router;