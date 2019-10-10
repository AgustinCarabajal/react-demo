'use strict'

const jwt = require('jsonwebtoken')
const model = require('../api/model/user')

const Token = {
    refreshTokens: async (token, refresh) => {
        let userId = -1
        
        try {
            const { user } = jwt.decode(refresh)
            userId = user
        } catch (err) {
            return {}
        }

        if(!userId) {
            return {}
        }

        const user = model.findById(userId)
        if (!user) {
            return {}
        }

        const refreshSecret = process.env.SECRET_2 + user.password

        try {
            jwt.verify(refresh, refreshSecret)
        } catch (err) {
            return {}
        }

        const [newToken, newRefreshToken] = await createTokens(user, process.env.SECRET, refreshSecret)

        return {
            token: newToken,
            refreshToken: newRefreshToken,
            user
        }
    },

    createTokens: async (model, secret, refreshSecret) => {
        const token = jwt.sign({
            user: model
        },
        secret, {
            expiresIn: '15m'
        })
        
        const refreshToken = jwt.sign({
            user: model.id
        }, process.env.SECRET_2, {
            expiresIn: '7d'
        })

        return Promise.all([token, refreshToken])
    }
}

module.exports = Token