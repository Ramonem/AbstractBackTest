var express = require('express');
var router = express.Router();
const { getSportsVenues } = require('../controllers/sportsVenue')
const { getGameTypes } = require('../controllers/gameType')
const { getEvents, getEvent, createEvent } = require('../controllers/event')
const { getEventInvitations, createEventInvitation, updateEventInvitation } = require('../controllers/eventInvitation')

router.get('/sportsVenue', getSportsVenues)
router.get('/gameType', getGameTypes)
router.get('/event', getEvents)
router.get('/event/:id', getEvent)
router.post('/event', createEvent)
router.get('/event/:eventId/invitation', getEventInvitations)
router.put('/event/:eventId/invitation', updateEventInvitation)
router.post('/event/invitation', createEventInvitation)

module.exports = router
