const express = require('express');
const {
  registerUser,
  getAllUsers,
  loginUser,
} = require('../controllers/userController');

const router = express.Router();

const { protectRoute } = require('../middleware/authMiddleware');

// Register a user
router.post('/', registerUser);

router.post('/login', loginUser);

// Get a list of users
router.get('/me', protectRoute, getAllUsers);

module.exports = router;
