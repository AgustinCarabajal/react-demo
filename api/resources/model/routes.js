'use strict'

const express = require('express')
const router = express.Router()

const auth = require('../../../core/auth')

const controller = require('./controller')
const model = router.route('/')

model.get(auth.isAuthorized, controller.index)

module.exports = {
  router: router,
  prefix: '/model'
}
