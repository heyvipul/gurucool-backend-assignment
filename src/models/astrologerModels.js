const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name: String,
  flowAdjustment: { type: Number, default: 0 } // Default flow adjustment for new astrologers
});

// Create astrologer model
const AstrologerModel = mongoose.model('astrologer', astrologerSchema);

module.exports = AstrologerModel;
