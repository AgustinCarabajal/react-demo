'use strict'

const dealership = require('../../model/dealership')
const controller = {}

// controller.index = async (req, res, next) => { }

controller.show = async (req, res, next) => {

    const result = await dealership.findById(req.params.id)

    res.send(result || {})
}

module.exports = controller
