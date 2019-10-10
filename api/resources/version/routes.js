'use strict'

const express = require('express')
const router = express.Router()

const auth = require('../../../core/auth')

const controller = require('./controller')
const version = router.route('/')

version
  .get(auth.isAuthorized, controller.index)
  .put(auth.isAuthorized, controller.edit)

module.exports = {
  router: router,
  prefix: '/version'
}
