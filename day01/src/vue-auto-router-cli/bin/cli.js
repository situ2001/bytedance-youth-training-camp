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
// register command refresh
program
  .command("refresh")
  .description("refresh routers...")
  .action(require("../lib/refresh"));
program.parse(process.argv);
// console.log(process.argv);
