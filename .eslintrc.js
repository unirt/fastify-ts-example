module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier', // this should be end of extends.
    'prettier/@typescript-eslint' // this should be end of extends.
  ],
  env: {
    node: true,
    es2020: true,
    'jest/globals': true
  }
};