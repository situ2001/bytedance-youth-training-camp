// auto generated CRUD method by using restful

const Koa = require("koa");
const app = new Koa();

// register routes
// 动态编程

// load mod by folder
const config = require("./config");
const { loadModel } = require("./framework/loader");
loadModel(config)(app);

// automatically generate routes
// [user, order]
// /api/user GET
// /api/user/1 GET
// /api/users POST PUT DELETE
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
// All routes
const restful = require("./framework/router");
app.use(restful);

// listening on port 3000
app.listen(3000, () => console.log("Listening on port 3000"));
