const webpackConfig = require('./webpack.tests.config')

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'chai'],
    singleRun: true,
    autoWatch: false,
    reporters: ['nyan'],
    files: ['./tests/index.js'],
    preprocessors: {
      './tests/index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
