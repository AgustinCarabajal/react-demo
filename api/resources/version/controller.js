'use strict'

const version = require('../../model/version')
const discount = require('../../model/discount')
const dealership = require('../../model/dealership')
const controller = {}

controller.index = async (req, res, next) => {
    const model = req.query.model_id
    let result = null

    if (model)
        result = await version.findAllByModel(model)

    const dealership_id = req.query.dealership_id
    if (dealership_id) {
        const dealer = await dealership.findById(dealership_id)
        if (dealer) {
            const data = []
            for(const v of result) {
                const avg = await discount.findAvgByVersion(v.id)
                const max = await discount.findMaxByVersion(v.id)
                const disc = await discount.findOneByVersion(v.id, dealer.id)
                data.push({
                    v,
                    'discount': disc['discount'],
                    'avg_discount': avg['avg'],
                    'max_discount': max['max']
                })
            }
            result = data
        }
    }

    res.send(result || {})

}

controller.edit = async (req, res, next) => {
    res.sendStatus( await discount.updateOne(req.body) ? 200 : 400)
}

module.exports = controller
