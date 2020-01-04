module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: [
    "eslint:recommended",
    'plugin:prettier/recommended',
    "plugin:vue/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["html", "vue"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],

    // don't require .vue extension when importing
    "import/extensions": [0],
    "import/no-unresolved": [0],
    "comma-dangle": ["error", "never"],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
  }
};
