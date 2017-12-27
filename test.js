#!/usr/bin/env node

const karma = require('karma');

require('ts-node').register({
  ignore: [],
});

const configFilePath = '@rhoda/qa/karma.conf.ts';
const cliOptions = {
  cmd: 'start',
  configFile: configFilePath,
};

const config = karma.config.parseConfig(configFilePath, cliOptions);
const server = new karma.Server(config, exitCode => process.exit(exitCode));

server.start();
