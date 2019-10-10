'use strict'

const express = require('express')
const router = express.Router()

const controller = require('./controller')
const login = router.route('/')

login
  .post(controller.index)

module.exports = {
  router: router,
  prefix: '/login'
}
