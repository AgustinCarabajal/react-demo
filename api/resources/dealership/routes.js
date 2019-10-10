'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../../../core/auth')

const controller = require('./controller')
const dealership = router.route('/')

// dealership.get(auth.isAuthorized, controller.index)
router.get('/:id', auth.isAuthorized, controller.show)

module.exports = {
  router: router,
  prefix: '/dealership'
}
