module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        customProperties: {
          warnings: false,
          preserve: true,
        },
      },
    },
  },
});
