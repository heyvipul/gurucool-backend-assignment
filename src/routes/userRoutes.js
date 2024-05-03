const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for creating a new user
router.post('/', userController.createUser);

// Route for getting all users
router.get('/', userController.getAllUsers);

module.exports = router;
