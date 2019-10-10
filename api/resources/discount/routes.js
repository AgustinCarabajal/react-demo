'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../../../core/auth')

const controller = require('./controller')
const discount = router.route('/')

discount.get(auth.isAuthorized, controller.index)

module.exports = {
  router: router,
  prefix: '/discount'
}
