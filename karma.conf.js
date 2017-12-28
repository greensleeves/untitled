const webpackConfig = require('./webpack.tests.config')

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'chai'],
    singleRun: true,
    autoWatch: false,
    reporters: ['mocha'],
    files: ['./tests/index.js'],
    preprocessors: {
      './test/*.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: false
    }
  })
}
