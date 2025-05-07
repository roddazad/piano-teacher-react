const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    requestedDate: String,
    status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Schedule', ScheduleSchema);