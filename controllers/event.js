const models = require('../models')

exports.getEvents = async (req, res) => {
    try {
        const data = await models.Event.findAll({
            attributes: {
                exclude: ['GameTypeId', 'SportsVenueId']
            },
            include: [{
                model: models.GameType
            },
            {
                model: models.SportsVenue
            }]
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.getEvent = async (req, res) => {
    try {
        const { id } = req.params
        const data = await models.Event.findOne({
            attributes: {
                exclude: ['GameTypeId', 'SportsVenueId']
            },
            where: {
                id
            },
            include: [{
                model: models.GameType
            },
            {
                model: models.SportsVenue
            }]
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.createEvent = async (req, res) => {
    try {
        const { name, gameTypeId, sportsVenueId, date } = req.body
        await models.Event.create({
            name, gameTypeId, sportsVenueId, date
        })
        return res.status(200).json({ message: `Evento ${name} creado` })
    } catch (error) {
        return res.status(500).json(error)
    }
}