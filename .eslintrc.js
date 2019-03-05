module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    mocha: true,
  },
  overrides: [
    {
      files: '*.test.js',
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: 'webpack.*',
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
