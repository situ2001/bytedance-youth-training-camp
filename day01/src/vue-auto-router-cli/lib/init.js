const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));

module.exports = async (name) => {
  // print welcome UI
  clear();
  const data = await figlet("My Toolbox");
  log(data);
};
