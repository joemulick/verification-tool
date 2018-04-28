const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VerifySchema = new Schema({
    code: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }    
});

module.exports = Verify = mongoose.model('users', UserSchema);