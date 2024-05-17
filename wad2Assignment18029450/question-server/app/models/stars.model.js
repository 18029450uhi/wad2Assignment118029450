const mongoose = require('mongoose');

const StarsSchema = new mongoose.Schema({
    username: String,
    qid: String
});

const Stars = mongoose.model('Stars', StarsSchema);

module.exports = Stars;