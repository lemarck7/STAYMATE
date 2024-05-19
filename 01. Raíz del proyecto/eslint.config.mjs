import globals from "globals";
import js from "@eslint/js";
import airbnb from "eslint-config-airbnb";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: ["eslint:recommended", "airbnb", "prettier"],
    rules: {
      "prettier/prettier": "error",
    },
  },
];
