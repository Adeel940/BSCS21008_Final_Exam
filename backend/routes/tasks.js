const express = require('express');
const router = express.Router();

let tasks = []; // Temporary in-memory tasks

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Create a task
router.post('/', (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});

// Delete a task
router.delete('/:id', (req, res) => {
  tasks = tasks.filter((task) => task.id !== parseInt(req.params.id));
  res.status(200).json({ message: 'Task deleted' });
});

module.exports = router;
