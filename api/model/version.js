'use strict'

const db = require('../../core/db')

class Version {
    constructor() {}

    async findAllByModel(model_id) {
        return db.select('*').from('versions').where({ model_id: model_id })
    }
}

module.exports = new Version