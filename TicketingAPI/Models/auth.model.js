const mongoose = require('mongoose');

const AuthSchema = mongoose.Schema({
    fName: String,
    lName: String,
    mailID: String,
    uName: String,
    pass: String,
    confPass: String,
    loginDiv: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Authd', AuthSchema);