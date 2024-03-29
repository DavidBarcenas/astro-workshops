module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
      bracketSameLine: false,
      printWidth: 100,
      semi: false,
      singleQuote: true,
      jsxSingleQuote: true,
      tabWidth: 2,
      trailingComma: "none",
      useTabs: false,
      endOfLine: "lf",
      bracketSpacing: true,
      quoteProps: "as-needed",
      arrowParens: "always",
      htmlWhitespaceSensitivity: "css",
      jsxBracketSameLine: false,
    },
  ],
};
