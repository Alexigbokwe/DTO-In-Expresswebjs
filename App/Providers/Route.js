//Require routes path
const users = require("@route/users");
const api = require("@route/api");

//Use routes
serverApp.use("/api/user", users);
serverApp.use("/api/", api);
