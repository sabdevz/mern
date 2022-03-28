const express = require('express');
const router = express.Router();

const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

const { protectRoute } = require('../middleware/authMiddleware');

// get and create goals
router.route('/').get(protectRoute, getGoals).post(protectRoute, createGoal);

// update and delete goals
router
  .route('/:id')
  .put(protectRoute, updateGoal)
  .delete(protectRoute, deleteGoal);

module.exports = router;
