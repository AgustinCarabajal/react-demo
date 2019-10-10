'use strict'

const db = require('../../core/db')

class Brand {
    constructor() {}

    async findById(id) {
        return db.select('*').from('brands').where({ id: id }).first()
    }
}

module.exports = new Brand