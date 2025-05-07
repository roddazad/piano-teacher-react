const router = require('express').Router();
const protect = require('../middleware/authMiddleware');
const User = require('../models/User');

// Get Students
router.get('/students', protect(['instructor']), async (req, res) => {
    const students = await User.find({ role: 'student' });
    res.json(students);
});

module.exports = router;