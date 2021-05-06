#!/usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json');
const caesarCoder = require('../coder');

commander
  .version(pkg.version)
  .description('App encode and decode a text by Caesar cipher.');

commander
  .option('--action <action>')
  .alias('-a')
  .description('Encode or decode a text by Caesar cipher.')
  .action((action) => {
    const a = caesarCoder(action, 7, 'decode');
    console.log(action);
  });

commander.parse(process.argv);
