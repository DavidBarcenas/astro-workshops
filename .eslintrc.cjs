module.exports = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        indent: "off",
        "no-tabs": "off",
        "space-before-function-paren": "off",
      },
    },
  ],
};
