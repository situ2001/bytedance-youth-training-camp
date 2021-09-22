import fs from "fs";
import ejs from "ejs";
// use prettier to intercept then prettify the codes
import prettier from "prettier";
import { fileURLToPath } from "url";
import path from "path";

// problem-driven => recall the procedure you manually perform it

// idea: small step
// dynamically generate a template
export function createIndexTemplate(
  config = {
    router: false,
    static: false,
    port: 3000,
  }
) {
  const __dirname = fileURLToPath(import.meta.url);
  const pathname = path.resolve(__dirname, "../../template/index.ejs");
  const template = fs.readFileSync(pathname, "utf-8");
  const generatedCode = ejs.render(template, config);
  const prettifiedCode = prettier.format(generatedCode, { parser: "babel" });
  return prettifiedCode;
}
