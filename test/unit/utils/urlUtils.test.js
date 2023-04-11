const expect = require('chai').expect
const {
  JSON_CONTENT_TYPE,
  ARTIST_SEARCH_METHOD,
  XML_CONTENT_TYPE,
} = require('../../../api/constants/constants')
const { getUrl } = require('../../../api/utils/urlUtils')

describe('testing the getUrl function', () => {
  it('should generate the correct URL for JSON', () => {
    const method = ARTIST_SEARCH_METHOD
    const name = 'Taylor Swift'
    const format = JSON_CONTENT_TYPE
    const expectedUrl = `http://ws.audioscrobbler.com/2.0/?method=${method}&artist=${name}&api_key=${process.env.API_KEY}&format=json`

    const actualUrl = getUrl(method, name, format)

    expect(actualUrl).to.equal(expectedUrl)
  })
  it('should generate the correct URL for XML', () => {
    const method = ARTIST_SEARCH_METHOD
    const name = 'Taylor Swift'
    const format = XML_CONTENT_TYPE
    const expectedUrl = `http://ws.audioscrobbler.com/2.0/?method=${method}&artist=${name}&api_key=${process.env.API_KEY}`
    const actualUrl = getUrl(method, name, format)
    expect(actualUrl).to.equal(expectedUrl)
  })
})
