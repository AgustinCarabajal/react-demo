'use strict'

const user = require('../model/user')

class Helper {

  constructor() { }

  async validateDealer(body) {
    const { email, password } = body
    let dealer = null

    if (email && password) {
      dealer = user.isValid(email, password)
    }

    return dealer || {}
  }

}

module.exports = Helper