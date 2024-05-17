const mongoose = require('mongoose');

const QuestionsSchema = new mongoose.Schema({
    id: Number,
    qtype: String,
    urltitle: {type: String, unique: true},
    fulltitle: String,
    qtext: String,
    metadata: String
});

const Questions = mongoose.model('Questions', QuestionsSchema);

module.exports = Questions;