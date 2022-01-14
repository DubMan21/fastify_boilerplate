module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  rules: {
    semi: [2, 'always', { 'omitLastInOneLineBlock': true}],
    'max-len': ['error', { 'code': 140 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'arrow-parens': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'sort-imports': 'error',
    camelcase: 'off',
  },
  parser: '@typescript-eslint/parser',
};
