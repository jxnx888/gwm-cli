#!/usr/bin/env node

// Node CLI 应用入口文件必须要有这样的文件头
// 如果是 Linux 或 maxOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js
const chalk = require('chalk');
const ora = require('ora');
const cm = require('commander');
const inquirer = require('inquirer');
const program = require('commander');
var process1 = require('child_process');
//version 版本号
//name 新项目名称
program.version('1.0.5', '-v, --version')
  .command('init <name>')
  .action((name) => {
    console.log('clone template ...');
    process1.exec('git clone -b react-hooks-base-cli https://git.gwmdevops.com/frontend/h5/gwm-e-commerce.git ' + name, function(error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
        return;
      }
      console.log(stdout);
      console.log('clone success');
    });
  });
program.parse(process.argv);
