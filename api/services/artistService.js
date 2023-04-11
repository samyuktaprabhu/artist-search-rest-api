const dotenv = require('dotenv')
const { getUrl } = require('../utils/urlUtils')
const { writeArtistsToCSVFile } = require('../utils/csvUtils')
const { artistList } = require('../data/artistDictionary.json')
const {
  JSON_CONTENT_TYPE,
  ARTIST_SEARCH_METHOD,
} = require('../constants/constants')
dotenv.config()

const searchArtistService = async (artistName) => {
  let results = {}
  try {
    const response = await fetch(
      getUrl(ARTIST_SEARCH_METHOD, artistName, JSON_CONTENT_TYPE),
    )
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`,
      )
    }
    const JSONData = await response.json()
    if (JSONData.results && JSONData.results.artistmatches) {
      results = JSONData.results.artistmatches.artist
    }
    if (results.length === 0) {
      const randomArtist =
        artistList[Math.floor(Math.random() * artistList.length)]
      return searchArtistService(randomArtist)
    }
    if (results.length > 0) {
      writeArtistsToCSVFile(results)
    }
  } catch (err) {
    console.log(err)
  }
  return results
}

module.exports = {
  searchArtistService,
}
