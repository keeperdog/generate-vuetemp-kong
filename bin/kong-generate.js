#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const kong = require('../src/gen')

program
    .command('generate')
    .description('generate basic vue file quickly')
    .alias('g')
    .action(function (type, name) {
        kong.gen(type, name)
    })

program.parse(process.argv)