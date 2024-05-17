const config = require("../config/db.config.js");
const {mongoose} = require("mongoose");
const db = {};

db.mongoose = mongoose.connect("mongodb://mongodb:27017", {}).then(() => {
    console.log('MongoDB Connected')
}).catch((err) => {
    console.log(err)
});


db.activity = require("../models/activity.model.js");
db.stars = require("../models/stars.model.js");

module.exports = db;