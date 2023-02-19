export default [
  {
    files: [
      "src/**/*.js",
      "src/**/*.ts",
      "src/**/*.tsx",
    ],
    ignores: [
      "**/*.config.js",
      "!**/eslint.config.js",
    ],
    languageOptions: {
      ecmaVersion: 5
    },
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error",
    }
  }
]