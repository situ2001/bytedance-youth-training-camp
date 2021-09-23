import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/loader.js",
  output: [
    {
      file: "./src/loader-cjs.js",
      format: "cjs",
      sourcemap: false,
    },
  ],
  plugins: [resolve(), commonjs()],
};
