const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name: String,
  flowAdjustment: { type: Number, default: 0 } 
  
},{ timestamps: true });

const AstrologerModel = mongoose.model('astrologer', astrologerSchema);

module.exports = AstrologerModel;
