const AstrologerModel = require('../models/astrologerModels');
const UserModel = require('../models/userModel');

const connectUserToTopAstrologer = async (userId) => {
    try {
        const topAstrologer = await AstrologerModel.findOne().sort('-flowAdjustment');

        if (topAstrologer) {
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
