'use strict'

const winston = require('winston')

// Winston log configuration
const _config = {
    levels: {
        debug: 5,
        info: 4,
        warn: 3,
        fail: 2,
        error: 1,
        fatal: 0
    },
    colors: {
        debug: 'blue',
        info: 'green',
        warn: 'yellow',
        fail: 'yellow',
        error: 'red',
        fatal: 'magenta'
    }
}

// Set custom colors
winston.addColors(_config.colors)

// Set custom levels
winston.setLevels(_config.levels)

// Set Logger
var logger = new (winston.Logger)({
    levels: _config.levels,
    transports: [
        // setup console logging
        new (winston.transports.Console)({
            levels: _config.levels,
            colorize: true
        })
    ]
})

module.exports = logger