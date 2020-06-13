#!/usr/bin/env node
const commandLineParser = require('./command/lineParser');
const runner = require('./runner');

const args = commandLineParser.parseArguments();
runner.run(args).catch(error => {
	console.error(error);
	process.exit(1);
});
