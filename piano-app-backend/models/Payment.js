const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    date: Date,
    status: String
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);