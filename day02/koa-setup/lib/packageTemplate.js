import fs from "fs";
import ejs from "ejs";
import prettier from "prettier";
import { fileURLToPath } from "url";
import path from "path";

export function createPackageTemplate(config) {
  const __dirname = fileURLToPath(import.meta.url);
  const pathname = path.resolve(__dirname, "../../template/package.json.ejs");
  const template = fs.readFileSync(pathname, "utf8");
  const generatedCode = ejs.render(template, {
    name: config.name,
    packages: config.packages,
  });
  return prettier.format(generatedCode, { parser: "json" });
}
