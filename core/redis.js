'use strict'

const winston = require('./_winston')
const redis = require('redis')

const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
)

redisClient.on('connect', function() {
    winston.info('Redis is running..')
})

redisClient.on('error', function (err) {
  winston.error('Redis: ' + err);
})

module.exports = redisClient
