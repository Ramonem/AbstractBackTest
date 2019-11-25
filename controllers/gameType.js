const models = require('../models')

exports.getGameTypes = async (req, res) => {
    try {
        const data = await models.GameType.findAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}