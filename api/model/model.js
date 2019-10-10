'use strict'

const db = require('../../core/db')

class Model {
    constructor() {}

    async findAllByBrand(brand_id) {
        return db.select('*').from('models').where({ brand_id: brand_id })
    }
}

module.exports = new Model