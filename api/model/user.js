'use strict'

const db = require('../../core/db')
const bcrypt = require('bcrypt')

class User {

    constructor() {}

    async findUserByEmail(email) {
        return db
            .select('email', 'password')
            .from('dealers')
            .where({ email })
            .first()
    }

    async isValid(email, password) {
        const foundUser = await this.findUserByEmail(email)

        if (!!foundUser && bcrypt.compareSync(password, foundUser.password)) {
            return await db.select('email', 'dealership_id', 'first_name', 'last_name', 'profile_picture').from('dealers').where({ email }).first() || undefined
        }

        return undefined
    }
}

module.exports = new User