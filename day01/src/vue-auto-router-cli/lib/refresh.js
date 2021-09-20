// Read list of file

// Concat codes,(use template rendering)
const fs = require("fs");
const handlebars = require("handlebars");
const chalk = require("chalk"); // TODO: import chalk once, then use it everywhere

module.exports = async () => {
  // get list of files
  const list = fs
    .readdirSync("./src/views")
    .filter((e) => e !== "Home.vue")
    .map((e) => ({
      name: e.replace(".vue", "").toLowerCase(),
      file: e,
    }));

  // generate definition of routes
  compile({ list }, "./src/router.js", "./template/router.js.hbs");
  // generate menu
  compile({ list }, "./src/App.vue", "./template/App.vue.hbs");

  /**
   *
   * @param {*} meta definition of data
   * @param {*} filePath target file
   * @param {*} templatePath template
   */
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      console.log(chalk.green(`🚀 successfully updated routes`));
    }
  }
};
