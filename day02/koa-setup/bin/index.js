#! node
// OS: window
// TODO: CLI & bin in package.json
// teach-setup-koa

import fs from "fs";
import { spawn } from "child_process";
import { getConfig, promptUser } from "../lib/config.js";
import { createIndexTemplate } from "../lib/indexTemplate.js";
import { createPackageTemplate } from "../lib/packageTemplate.js";

// TODO: refactor(separate to individual package)
const answer = await promptUser();
const config = await getConfig(answer);

// comment starts

// // main routine
// // h...happy path?
// // 1. create a folder
fs.mkdirSync(getRootPath());

// // 2. create index.js
fs.writeFileSync(
  `${getRootPath()}/index.js`,
  createIndexTemplate({
    port: config.port,
    router: config.middleware.router,
    static: config.middleware.static,
  })
);
// // 3. create package.json
// // practice: generate package.json based on data passed to ejs.renderer
const packages = {};
if (config.middleware.router) {
  packages["koa-router"] = "^10.1.1";
}
if (config.middleware.static) {
  packages["koa-static"] = "^5.0.0";
}
fs.writeFileSync(
  `${getRootPath()}/package.json`,
  createPackageTemplate({
    name: config.packageName,
    packages: {
      koa: "^2.13.1",
      ...packages,
    },
  })
);
// // 4. install deps
// // TODO: yarn
const spawn_ = async (...args) => {
  // determine wether you are using win32 or not
  if (process.platform === "win32") {
    const opt = args[args.length - 1];
    opt.shell = true;
  }
  // Promise
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

await spawn_("yarn", { cwd: `${config.packageName}` });

function getRootPath() {
  return config.packageName;
}
