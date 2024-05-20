1.  A bug was found  in IWTSC Backend `stars.routes.js` file. The routing method was used `Post`instead of `Get`. it has been fixed.
This the correct code:
```javascript
    app.get("/api/stars/get", [authJwt.verifyToken], controller.getStars);
```