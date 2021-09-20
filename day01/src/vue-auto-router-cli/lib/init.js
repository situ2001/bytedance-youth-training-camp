const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));
const { clone } = require("./download");
const open = require("open");

const spawn = async (...args) => {
  // determine wether you are using win32 or not
  if (process.platform === "win32") {
    const opt = args[args.length - 1];
    opt.shell = true;
  }
  // Promise
  const { spawn } = require("child_process");
  return new Promise((resolve, reject) => {
    // when process stops
    const childProcess = spawn(...args);
    // child stream out => main stream in
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => resolve());
    childProcess.on("error", (err) => reject(err));
  });
};

module.exports = async (name) => {
  // print welcome UI
  clear();
  const data = await figlet("My Toolbox");
  log(data);

  // download template
  log(`Creating project ${name}`);
  await clone("github:su37josephxia/vue-template", name);

  // download deps
  // child process
  log("🚛 Installing dependencies...");
  // TODO: add process bar
  // determine wether you are using win32 or not
  // await spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["install"], {
  //   cwd: `./${name}`,
  // });
  // TODO: FIX bug
  await spawn("npm", ["install"], { cwd: `./${name}` });

  // when done
  // TODO: hint & run `npm run`
  log(`
  ----------
  Done
  ----------
  Usage
    cd ${name}
    npm run serve
  ----------
  `);

  open("http://127.0.0.1:8080");
  await spawn("npm", ["run", "serve"], { cwd: `./${name}` });
};
