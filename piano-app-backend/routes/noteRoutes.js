const router = require('express').Router();
const protect = require('../middleware/authMiddleware');
const multer = require('multer');
const Note = require('../models/Note');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Upload Note
router.post('/upload', protect(['instructor']), upload.single('file'), async (req, res) => {
    const note = new Note({
        title: req.body.title,
        file: req.file.filename,
        student: req.body.studentId
    });

    await note.save();
    res.json({ message: "Note uploaded" });
});

// Get Note by Student
router.get('/:studentId', protect(), async (req, res) => {
    const notes = await Note.find({ student: req.params.studentId });
    res.json(notes);
});

module.exports = router;