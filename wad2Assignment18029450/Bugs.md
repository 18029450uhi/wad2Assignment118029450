1. We encounter a bug in IWTSC Backend `stars.routes.js` file. The routing method was used `Post`instead of `Get`.
This the correct code:
```javascript
    app.get("/api/stars/get", [authJwt.verifyToken], controller.getStars);
```