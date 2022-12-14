const router = require('express').Router();
const SlotModel = require('../model/slot.model')

const createSlot = async (req, res) => {
    try {
        let Slot = await SlotModel.findOne({ name: req.body.name })
        if (Slot) {
            res.json({ status: 200, Message: 'name slot already' })
        } else {

            let slot = await SlotModel.create({
                slot: req.body.slot,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
            })
            res.json({ status: 200, Message: 'success' })
        }

    } catch (err) {
        res.json(err)
    }
}

module.exports = {createSlot}