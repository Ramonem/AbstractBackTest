const models = require('../models')

exports.getSportsVenues = async (req, res) => {
    try {
        const data = await models.SportsVenue.findAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}