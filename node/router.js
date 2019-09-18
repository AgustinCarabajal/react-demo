const express = require('express')

const posts = require('./posts')
const post = require('./post')

const Router = express.Router()

Router.get('/posts', (req, res, next) => {
  res.json(posts)
})

Router.get('/post', (req, res, next) => {
  res.json(post)
})

module.exports = Router