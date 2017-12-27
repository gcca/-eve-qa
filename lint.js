#!/usr/bin/env node

const runner = require('tslint/lib/runner');

runner.run({
  exclude: [],
  files: [
    './src/**/*.ts',
  ],
  format: 'verbose',
  project: 'src/',
}, {
  error(message) {
    console.log(message);
    process.exit(1);
  },
  log(message) {
    console.log(message);
  },
})
  .then(status => process.exitCode = status)
  .catch(e => console.error(e), process.exitCode = 1);
