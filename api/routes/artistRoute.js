const express = require('express')
const artistController = require('../controllers/artistController')

const router = express.Router()

router.get('/searchartist', artistController.searchArtistsController)

module.exports = router
