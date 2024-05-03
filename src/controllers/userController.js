const UserModel = require('../models/userModel');
const flowDistributionService = require('../services/flowDistributionService');
const AstrologerModel = require('../models/astrologerModels'); // Ensure the correct path

const userController = {
  createUser: async (req, res) => {
    try {
      const { name } = req.body;
      const newUser = await UserModel.create({ name });
      
      // Automatically connect the user to a top astrologer
      const connectedAstrologer = await flowDistributionService.connectUserToTopAstrologer(newUser._id);
      if (!connectedAstrologer) {
        console.log('Failed to connect user to top astrologer');
      }

      res.status(201).json({ user: newUser, connectedAstrologer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

module.exports = userController;
