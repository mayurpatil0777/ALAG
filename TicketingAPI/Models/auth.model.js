const mongoose = require('mongoose');

const AuthSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Auth', AuthSchema);