#!/usr/bin/env node

const program = require("commander");
const path = require("path");
const fs = require("fs");
const glob = require("glob"); // npm i glob -D

program.usage("<project-name>").parse(process.argv);

// 根据输入，获取项目名称
let projectName = program.args[0];

if (!projectName) {
  // project-name 必填
  // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
  program.help();
  return;
}

const list = glob.sync("*"); // 遍历当前目录
let rootName = path.basename(process.cwd());
if (list.length) {
  // 如果当前目录不为空
  if (
    list.filter((name) => {
      const fileName = path.resolve(process.cwd(), path.join(".", name));
      const isDir = fs.stat(fileName, (err, info) => {
        return info.isDirectory();
      });
      return name.indexOf(projectName) !== -1 && isDir;
    }).length !== 0
  ) {
    console.log(`项目${projectName}已经存在`);
    return;
  }
  rootName = projectName;
} else if (rootName === projectName) { 
  rootName = ".";
} else {
  rootName = projectName;
}

go();

function go() {
  // 预留，处理子命令
  console.log(path.resolve(process.cwd(), path.join(".", rootName)));
}
