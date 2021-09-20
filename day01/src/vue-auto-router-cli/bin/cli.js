#! node
// OS: window
// console.log("hello cli...");

// CLI
const program = require("commander");
// strategy mode
// options
program.version(require("../package.json").version);
// commands
program
  .command("init <name>")
  .description("init project")
  .action(require("../lib/init"));
program.parse(process.argv);
// console.log(process.argv);
