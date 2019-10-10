'use strict'

const discount = require('../../model/discount')
const controller = {}

controller.index = async (req, res, next) => {

    const version = req.query.version_id
    let result = null

    if (version)
        result = await discount.findAllByVersion(version)

    res.send(result || {})
}

module.exports = controller
