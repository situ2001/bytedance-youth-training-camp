const { promisify } = require("util");

module.exports.clone = async function (repo, des) {
  const download = promisify(require("download-git-repo"));
  // what a pitfall
  const ora = require("ora");
  const process = ora(`🛰 Downloading....${repo}`);
  process.start();
  await download(repo, des);
  process.succeed();
};
