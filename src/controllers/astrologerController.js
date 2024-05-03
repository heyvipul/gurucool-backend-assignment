const AstrologerModel = require('../models/astrologerModels');

const astrologerController = {
  createAstrologer: async (req, res) => {
    try {
      const { name } = req.body;
      const newAstrologer = await AstrologerModel.create({ name });
      res.status(201).json(newAstrologer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  //
  getAllAstrologers: async (req, res) => {
    try {
      const astrologers = await AstrologerModel.find();
      res.json(astrologers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  //
  updateFlowAdjustment: async (req, res) => {
    try {
      const { id } = req.params;
      const { adjustment } = req.body;
      const updatedAstrologer = await AstrologerModel.findByIdAndUpdate(id, { flowAdjustment: adjustment }, { new: true });
      if (updatedAstrologer) {
        res.json(updatedAstrologer);
      } else {
        res.status(404).json({ message: "Astrologer not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

module.exports = astrologerController;
