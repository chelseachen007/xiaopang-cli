#!/usr/bin/env node

const program = require('commander');

// program
// 	.command('init <name>')
// 	.description('init project')
// 	.action((name) => {
// 		console.log('init ' + name);
// 	});
program.command('init <name>').description('init project').action(require('../lib/init').init);

program.command('refresh').description('refresh routers...').action(require('../lib/refresh'));

program.parse(process.argv);
