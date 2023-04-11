const dotenv = require('dotenv')
const {
  JSON_CONTENT_TYPE,
  ARTIST_SEARCH_METHOD,
} = require('../constants/constants')
dotenv.config()

const getUrl = (
  method = ARTIST_SEARCH_METHOD,
  name,
  format = JSON_CONTENT_TYPE,
) =>
  'http://ws.audioscrobbler.com/2.0/?method=' +
  method +
  '&artist=' +
  name +
  '&api_key=' +
  process.env.API_KEY +
  (format === JSON_CONTENT_TYPE ? '&format=json' : '')

module.exports = {
  getUrl,
}
