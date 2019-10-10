'use strict'

const express = require('express')
const router = express.Router()

const auth = require('../../../core/auth')

const controller = require('./controller')
router.route('/:id', auth.isAuthorized, controller.show)

module.exports = {
  router: router,
  prefix: '/brand'
}
