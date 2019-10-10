'use strict'

const winston = require('./core/_winston')
const express = require('express')
const app = express()

require('./core/config')(app)
require('./core/routes')(app)

app.listen(app.get('port'), function () {
  init()
})

function init() {
  winston.info(`Attempting to connect to Port: ${app.get('port')} ...\n`)
  console.log('========================\n')
  console.log('App  : Dealer API')
  console.log('Port :', app.get('port'))
  console.log('Env  :', process.env.NODE_ENV)
  console.log('\n========================\n')
}