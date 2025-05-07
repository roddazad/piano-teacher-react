const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['student', 'instructor'], default: 'student' },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
});

module.exports = mongoose.model('User', UserSchema);