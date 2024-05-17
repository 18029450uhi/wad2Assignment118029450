//https://github.com/bezkoder/node-js-jwt-authentication-postgresql
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// database
const db = require("./app/models");
const {connection} = require("mongoose");
const Questions = db.activity
const Stars = db.stars

// db.sequelize.sync();
// force: true will drop the table if it already exists
connection.dropDatabase().then(() => {
    console.log("Database dropped");
}).catch((error) => {
    console.error("Error dropping database:", error);
});

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to the app"});
});

// routes
require('./app/routes/activity.routes')(app)
require('./app/routes/stars.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    initial();
});

function initial() {
    Questions.create({
        id: 4,
        qtype: "q",
        urltitle: "bin_search",
        fulltitle: "Binary Search",
        qtext: "This is some question text about binary search, isn't it?",
        metadata: JSON.stringify({
            'answers': [{'text': 'Yes', 'correct': true}, {
                'text': 'No',
                'correct': false
            }, {'text': 'Maybe', 'correct': false}, {'text': 'All of the above', 'correct': false}]
        })
    }).then(() => console.log("Question created"))

    Questions.create({
        id: 2,
        qtype: "q",
        urltitle: "avl_trees",
        fulltitle: "AVL Trees",
        qtext: "This is some question text about AVL Trees, isn't it?",
        metadata: JSON.stringify({
            'answers': [{'text': 'Yes', 'correct': true}, {
                'text': 'No',
                'correct': false
            }, {'text': 'Maybe', 'correct': false}, {'text': 'All of the above', 'correct': false}]
        })
    }).then(() => console.log("Question created"))

    Questions.create({
        id: 3,
        qtype: "q",
        urltitle: "java_types",
        fulltitle: "Java Types",
        qtext: "This is some question text about Java types, isn't it?",
        metadata: JSON.stringify({
            'answers': [{'text': 'Yes', 'correct': true}, {
                'text': 'No',
                'correct': false
            }, {'text': 'Maybe', 'correct': false}, {'text': 'All of the above', 'correct': false}]
        })
    }).then(() => console.log("Question created"))

    Questions.create({
        id: 1,
        qtype: "q",
        urltitle: "haskell_types",
        fulltitle: "Haskell Types",
        qtext: "This is some question text about Haskell types, isn't it?",
        metadata: JSON.stringify({
            'answers': [{'text': 'Yes', 'correct': true}, {
                'text': 'No',
                'correct': false
            }, {'text': 'Maybe', 'correct': false}, {'text': 'All of the above', 'correct': false}]
        })
    }).then(() => console.log("Question created"))
    Stars.create({
        username: "test",
        qid: "bin_search"
    }).then(() => console.log("Star created"))
}
