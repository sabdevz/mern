const express = require('express');
const router = express.Router();

const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

// get and create goals
router.route('/').get(getGoals).post(createGoal);

// update and delete goals
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;
