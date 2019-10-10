'use strict'

const brand = require('../../model/brand')
const controller = {}

controller.show = async (req, res, next) => {

    const result = await brand.findById(req.params.id)

    res.send(result || {})

}

module.exports = controller
