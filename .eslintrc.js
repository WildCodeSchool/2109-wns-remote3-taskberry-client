module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "no-console": "off",
    "no-alert": "off",
    "no-shadow": "off",
    // "@typescript-eslint/no-shadow": [
    //   "error",
    //   ,
    //   { ignoreTypeValueShadow: true },
    // ],
    "prettier/prettier": "error",
    "@typescript-eslint/no-empty-function": "off",
    "react/jsx-key": "off"
  },
  ignorePatterns: [".eslintrc.js"],
};
