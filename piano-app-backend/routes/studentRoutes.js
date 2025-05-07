const router = require('express').Router();
const protect = require('../middleware/authMiddleware');
const Note = require('../models/Note');
const Schedule = require('../models/Schedule');

// Get Notes
router.get('/notes', protect(['student']), async (req, res) => {
    const notes = await Note.find({ student: req.user.id });
    res.json(notes);
});

// Request Schedule Change
router.post('/schedule', protect(['student']), async (req, res) => {
    const request = new Schedule({
        student: req.user.id,
        requestedDate: req.body.requestedDate
    });

    await request.save();
    res.json({ message: "Schedule requested" });
});

module.exports = router;