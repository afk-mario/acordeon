module.exports = {
  env: {
    test: {
      plugins: ['babel-plugin-istanbul'],
    },
  },
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-export-default-from',
    'transform-export-extensions',
  ],
};
