'use strict'

const model = require('../../model/model')
const controller = {}

controller.index = async (req, res, next) => {
    
    const brand = req.query.brand_id
    let result = null

    if (brand)
        result = await model.findAllByBrand(brand)

    res.send(result || {})
}

module.exports = controller
