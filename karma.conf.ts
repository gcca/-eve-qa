export default function (config) {
  config.set({
    autoWatch: false,
    basePath: '../..',
    browsers: [
      'PhantomJS',
    ],
    colors: true,
    concurrency: Infinity,
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/core-js/client/shim.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      {
        included: false,
        pattern: 'node_modules/rxjs/**/*.js',
        watched: false,
      },
      {
        included: false,
        pattern: 'node_modules/rxjs/**/*.js.map',
        watched: false,
      },
      {
        included: false,
        pattern: 'node_modules/@angular/**/*.js',
        watched: false,
      },
      {
        included: false,
        pattern: 'node_modules/@angular/**/*.js.map',
        watched: false,
      },
      {
        included: false,
        pattern: 'build/system.conf.js',
        watched: false,
      },
      'node_modules/@rhoda/qa/karma.shim.ts',
      {
        included: false,
        pattern: 'build/**/*.js',
        watched: true,
      },
      {
        included: false,
        pattern: 'build/**/*.html',
        watched: true,
      },
      {
        included: false,
        pattern: 'build/**/*.css',
        watched: true,
      },
      {
        included: false,
        pattern: 'src/**/*.ts',
        watched: false,
      },
      {
        included: false,
        pattern: 'build/**/*.js.map',
        watched: false,
      },
    ],
    frameworks: [
      'jasmine',
    ],
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-typescript-preprocessor'),
    ],
    port: 9876,
    preprocessors: {
      'node_modules/@rhoda/qa/karma.shim.ts': 'typescript',
    },
    proxies: {
      '/base/build/node_modules/': '/base/node_modules/',
    },
    reporters: [
      'progress',
    ],
    singleRun: true,
  })
}
