#!/usr/bin/env node

const program = require('commander');

// program
// 	.command('init <name>')
// 	.description('init project')
// 	.action((name) => {
// 		console.log('init ' + name);
// 	});

//版本友好提示
program.version(require('../package').version)
    .usage('<command> [options]')
    .description('Welcome to Tim Scaffold demo project...');


//创建新项目 从远程git拉取模板
program.command('init <name>').description('init project').action(require('../lib/init').init);

// 自动生成路由文件
program.command('refresh').description('refresh routers...').action(require('../lib/refresh'));

program.parse(process.argv);
