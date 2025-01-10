const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTasksByStatus,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskControllers');


router.get('/', getTasks); 
router.get('/:status', getTasksByStatus); 
router.post('/', createTask); 
router.put('/:id', updateTask);
router.delete('/:id', deleteTask); 

module.exports = router;
