const db = require("../models");
const Stars = db.stars;

exports.stars = (req, res) => {
    Stars.find({username: req.body.username})
        .then(sts => {
            if (sts && sts.length > 0) {
                const starsFiltered = sts.map((s) => {
                    return {
                        qid: s.qid,
                    }
                })

                return res.status(200).send({success: true, stars: starsFiltered});
            } else {
                res.status(404).send({success: false, stars: []});
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};

exports.star = (req, res) => {
    Stars.findOne({username: req.body.username, qid: req.body.qid})
        .then(st => {
            if (st) {
                return res.status(200).send({success: false, message: "Already completed"});
            } else {
                Stars.create({
                    username: req.body.username,
                    qid: req.body.qid
                })
                    .then((st) => {
                        res.status(200).send({success: true, messages: "Star added"});
                    })
                    .catch(err => {
                        res.status(500).send({message: err.message});
                    });
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};