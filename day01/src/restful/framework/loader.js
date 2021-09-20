const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

// a loader
/**
 *
 * @param {*} dir directory to scanned (e.g. models)
 * @param {*} cb callback
 */
function load(dir, cb) {
  const url = path.resolve(__dirname, dir);
  const files = fs.readdirSync(url);
  files.forEach((filename) => {
    filename = filename.replace(".js", "");
    const file = require(url + "/" + filename);
    cb(filename, file);
  });
}

const loadModel = (config) => (app) => {
  mongoose.connect(config.db.url, config.db.options); // config.js
  const con = mongoose.connection;
  con.on("error", () => {
    console.error("Failed to connect database");
  });
  app.$model = {};
  load("../models", (filename, { schema }) => {
    console.log("loaded model:", filename, "schema:", schema);
    app.$model[filename] = mongoose.model(filename, schema);
  });
};

module.exports = {
  loadModel,
};
