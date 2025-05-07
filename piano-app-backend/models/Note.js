const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: String,
    file: String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);