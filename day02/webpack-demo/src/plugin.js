class HtmlPlugin {
  constructor() {}

  // webpack init plugin
  apply(compiler) {
    console.log("MyPlugin");
    compiler.hooks.emit.tapAsync(
      "HtmlPlugin",
      function (compilation, callback) {
        console.log("emit");
        console.log(compilation.assets);
        compilation.assets["test.md"] = {
          source: function () {
            return "## Hello Plugin";
          },
          size: function () {
            return 15;
          },
        };
        console.log("---");
        console.log(compilation.assets);
        callback();
      }
    );
  }
}

// generate .md or .html
module.exports = HtmlPlugin;
