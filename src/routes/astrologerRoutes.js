const express = require('express');
const router = express.Router();
const astrologerController = require('../controllers/astrologerController');

// Route for creating a new astrologer
router.post('/', astrologerController.createAstrologer);

// Route for getting all astrologers
router.get('/', astrologerController.getAllAstrologers);

// Route for updating flow adjustment for a specific astrologer
router.put('/:id/settings', astrologerController.updateFlowAdjustment);

module.exports = router;
