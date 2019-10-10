'use strict'

const Helper = require('../../helpers/helper')
const Token = require('../../../core/token')

const controller = {}

controller.index = async (req, res, next) => {

    let response = {}
    const dealer = await (new Helper().validateDealer(req.body))

    if (dealer) {
        const [token, refreshToken] = await Token.createTokens(dealer, process.env.SECRET, process.env.SECRET_2 + dealer.password)
        response = {
            status: 200,
            dealer,
            token: token,
            refresh_token: refreshToken
        }
    } else {
        response = { status: 403, message: 'Not Authorized!' }
    }

    res.send(response)
}

module.exports = controller
