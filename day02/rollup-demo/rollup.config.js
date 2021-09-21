// esm is used
import json from "@rollup/plugin-json"; // parse json
import { terser } from "rollup-plugin-terser"; // gzip
import nodeResolve from "@rollup/plugin-node-resolve"; // parse npm
import commonjs from "@rollup/plugin-commonjs"; // if a module is not an es module

export default {
  input: "./src/index",
  output: [
    {
      file: "./dist/bundle.esm.js",
      // format: "cjs", OR
      format: "esm", // cjs => esm
      plugins: [terser()], // wow, excited scope
    },
    {
      file: "./dist/bundle.cjs.js",
      // format: "esm", OR
      format: "cjs",
    },
  ],
  plugins: [json(), nodeResolve(), commonjs()],
  external: ["vue"], // declare external libs, they will not be bundled to output file, ?add peerDependencies?
};
