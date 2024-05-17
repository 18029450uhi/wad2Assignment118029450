const db = require("../models");
const Questions = db.activity;

exports.questions = (req, res) => {
    Questions.find({qtype: "q"})
        .then(qs => {
            if (qs && qs.length > 0) {
                const qNames = qs.map((q) => {
                    return {
                        qid: q.urltitle,
                        title: q.fulltitle
                    }
                })

                return res.status(200).send({success: true, questions: qNames});
            } else {
                res.status(404).send({success: false, questions: []});
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};

exports.question = (req, res) => {
    Questions.findOne({urltitle: req.body.urltitle})
        .then(q => {
            if (q) {
                const qData = {
                    urltitle: q.urltitle,
                    fulltitle: q.fulltitle,
                    qtext: q.qtext,
                    answers: JSON.parse(q.metadata)
                }
                return res.status(200).send({success: true, question: qData});
            } else {
                res.status(404).send({success: false, message: "no question found"});
            }
        })
        .catch(err => {
            res.status(500).send({success: false, message: err.message});
        });
};