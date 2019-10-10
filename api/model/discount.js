'use strict'

const db = require('../../core/db')

class Discount {
    constructor() {}

    async findAllByVersion(version_id) {
        return db.select('discount').from('dealership_discounts').where({ version_id: version_id })
    }

    async findMaxByVersion(version_id) {
        return db('dealership_discounts').max('discount').where({ version_id: version_id }).first()
    }

    async findAvgByVersion(version_id) {
        return db('dealership_discounts').avg('discount').where({ version_id: version_id }).first()
    }

    async findOneByVersion(version_id, dealership_id) {
        return db.select('discount').from('dealership_discounts').where({ 
            version_id: version_id,
            dealership_id: dealership_id
        }).first()
    }

    async updateOne({ version_id, dealership_id, discount }) {
        return db('dealership_discounts')
            .where({
                version_id: version_id,
                dealership_id: dealership_id
            })
            .update({ discount: discount })
    }
}

module.exports = new Discount