module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/base",
    "plugin:vuetify/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "prettier",
  ],
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "prettier/prettier": [
      "warn",
      {
        usePrettierrc: true,
      },
    ],
    "vue/script-setup-uses-vars": "off",
    curly: "warn",
    "no-else-return": "warn",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "no-undef": "off",
  },
};
