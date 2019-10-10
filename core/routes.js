'use strict'

const login = require('../api/resources/login/routes')
const dealership = require('../api/resources/dealership/routes')
const brand = require('../api/resources/brand/routes')
const model = require('../api/resources/model/routes')
const version = require('../api/resources/version/routes')
const discount = require('../api/resources/discount/routes')

module.exports = function (app) {

  // Routes
  app.use(login.prefix, login.router)
  app.use(dealership.prefix, dealership.router)
  app.use(brand.prefix, brand.router)
  app.use(model.prefix, model.router)
  app.use(version.prefix, version.router)
  app.use(discount.prefix, discount.router)
  
}
