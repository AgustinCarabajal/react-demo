'use strict'

/* const Promise = require('bluebird')

const initOptions = {
    promiseLib: Promise
}
const pgp = require('pg-promise')(initOptions)

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}) */
const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
})

module.exports = db;
