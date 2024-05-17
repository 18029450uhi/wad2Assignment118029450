const controller = require("../controllers/stars.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/stars/get", controller.stars);
    app.post("/api/stars/add", controller.star);
}