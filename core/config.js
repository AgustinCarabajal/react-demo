'use strict'

const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const dotenv = require('dotenv')

module.exports = function (app) {

  dotenv.config()

  app.set('port', process.env.PORT)

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  
  
  app.use(cors({origin: '*'}))
  
  app.use(compression())
  app.use(helmet())

}
