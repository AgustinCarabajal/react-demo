'use strict'

const jwt = require('jsonwebtoken')
const Token = require('./token')

module.exports.isAuthorized  = function(req, res, next) {
    const token = req.header('x-token')
    
    try {
        const { user } = jwt.verify(token, process.env.SECRET)
        req.user = user
    } catch (err) {
        const refresh = req.header('x-refresh-token')
        if(!refresh) {
            const e = new Error('Not authorized!')
            e.status = 403
            return next(e)
        }
        const newToken = Token.refreshTokens(token, refresh)
        if(newToken.token && newToken.refreshToken) {
            res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token')
            res.set('x-token', newToken.token)
            res.set('x-refresh-token', newToken.refreshToken)
            req.user = newToken.user
        }
    }

    return next()

}