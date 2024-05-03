const AstrologerModel = require('../models/astrologerModels');
const UserModel = require('../models/userModel');

// Function to connect a user to a top astrologer
const connectUserToTopAstrologer = async (userId) => {
    try {
        // Find the top astrologer based on the flow adjustment
        const topAstrologer = await AstrologerModel.findOne().sort('-flowAdjustment');

        if (topAstrologer) {
            // Connect the user to the top astrologer
            await UserModel.findByIdAndUpdate(userId, { connectedAstrologer: topAstrologer._id });
            console.log(`User ${userId} connected to top astrologer ${topAstrologer.name}`);
            return topAstrologer;
        }

        return null;
    } catch (error) {
        console.error('Error connecting user to top astrologer:', error);
        return null;
    }
};

module.exports = {
    connectUserToTopAstrologer
};
