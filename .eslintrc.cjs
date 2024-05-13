/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    //Delete `␍`  (cr 에러가 나는 경우, 개행 문제라고 하므로 아래를 추가하면 해결)
    //https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-eslint-delete-cr-prettier-prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
