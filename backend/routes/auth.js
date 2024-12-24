const express = require('express');
const router = express.Router();

const users = []; // Temporary in-memory storage

// Login endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Signup endpoint
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (users.some((u) => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
