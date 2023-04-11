const {
  ARTIST_NAME_MISSING_ERROR,
  FILE_NAME_MISSING_ERROR,
} = require('../constants/constants')
const artistService = require('../services/artistService')
const dotenv = require('dotenv')
dotenv.config()
const searchArtistsController = async (req, res) => {
  if (!process.argv[2]) {
    res.status(400).json({ message: ARTIST_NAME_MISSING_ERROR })
    return
  } else if (!process.argv[3]) {
    res.status(400).json({ message: FILE_NAME_MISSING_ERROR })
    return
  } else {
    const artistName = process.argv[2]
    try {
      const artists = await artistService.searchArtistService(artistName)
      res.json({ artists })
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }
}

module.exports = {
  searchArtistsController,
}
