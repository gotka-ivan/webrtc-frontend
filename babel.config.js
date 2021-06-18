module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', '@babel/env'],
  plugins: [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    test: {
      plugins: ['transform-require-context'],
    },
  },
}
