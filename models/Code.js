const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CodeSchema = new Schema({
    code: {
        type: String,
        required: true
    }
});

module.exports = Code = mongoose.model('codes', CodeSchema);