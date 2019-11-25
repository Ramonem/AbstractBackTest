const models = require('../models')

exports.getEventInvitations = async (req, res) => {
    try {
        const { eventId } = req.params
        const data = await models.EventInvitation.findAll({
            attributes: {
                exclude: ['EventId']
            },
            where: {
                eventId
            },
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.createEventInvitation = async (req, res) => {
    try {
        const { eventId, playerMail } = req.body
        const data = await models.EventInvitation.findOne({
            attributes: {
                exclude: ['EventId']
            },
            where: {
                eventId, playerMail
            }
        })
        if (data) {
            return res.status(200).json({ message: `Ya se envio una invitación a ${playerMail}` })
        }
        await models.EventInvitation.create({
            eventId, playerMail, status: 'Pendiente'
        })
        return res.status(200).json({ message: `Invitación enviada a ${playerMail}` })
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.updateEventInvitation = async (req, res) => {
    try {
        const { playerMail, status } = req.body
        const { eventId } = req.params
        await models.EventInvitation.update({
            status
        }, {
            where: {
                eventId, playerMail
            }
        })
        return res.status(200).json({ message: `Respondiste ${status} al evento` })
    } catch (error) {
        return res.status(500).json(error)
    }
}