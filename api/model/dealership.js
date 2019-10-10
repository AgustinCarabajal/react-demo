'use strict'

const db = require('../../core/db')

class Dealership {
    constructor() {}

    async findById(id) {
        return db.select('*').from('dealerships').where({ id: id }).first()
    }
}

module.exports = new Dealership