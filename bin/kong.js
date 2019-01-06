#!/usr/bin/env node

process.title = 'kong'

require('commander')
    .version(require('../package').version)
    .usage('<command> [option]')
    .command('generate', 'generate vue basic file on current folder')
    .parse(process.argv)

require('./kong-generate')