// Dependencies
const express = require('express')
const app = express()
const router = require('./router')

// API dispatch
app.use('/api', router)

// Sending all the traffic to React
app.get('*', (req, res) => {
  res.send({
    status: 'success'
  })
})

// Listen port 3000
app.listen(3000, err => {
  if (!err) {
    console.log('Running on port 3000')
  }
});