const express = require('express');
const router = express.Router();
const astrologerController = require('../controllers/astrologerController');

router.post('/', astrologerController.createAstrologer);

router.get('/', astrologerController.getAllAstrologers);

router.put('/:id/settings', astrologerController.updateFlowAdjustment);

module.exports = router;
