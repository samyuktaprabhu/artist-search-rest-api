const expect = require('chai').expect
const fs = require('fs')
const { searchArtistService } = require('../../../api/services/artistService')
require('../../../api/data/artistDictionary.json')
require('../../../api/utils/csvUtils')
const {
  DEFAULT_FILE_SAVE_PATH,
  DATA_UNAVAILABLE_MESSAGE,
  IMAGE_SIZE_SMALL,
  UTF8_ENCODING,
} = require('../../../api/constants/constants')

const formattedResults = (results) =>
  results
    .map(({ name, mbid, url, image }) => [
      '"' + name + '"',
      mbid !== '' ? '"' + mbid + '"' : DATA_UNAVAILABLE_MESSAGE,
      url !== '' ? '"' + url + '"' : DATA_UNAVAILABLE_MESSAGE,
      image.find((img) => img.size === IMAGE_SIZE_SMALL)['#text'] !== ''
        ? image.find((img) => img.size === IMAGE_SIZE_SMALL)['#text']
        : DATA_UNAVAILABLE_MESSAGE,
    ])
    .map((row) => row.join(','))

const readCSVData = () =>
  fs.readFileSync(
    `${DEFAULT_FILE_SAVE_PATH}/${process.argv[3]}.csv`,
    UTF8_ENCODING,
  )

describe('searchArtistService', () => {
  it('should return the data matching the CSV file for an artist name present in the endpoint results', async () => {
    process.argv = ['node', 'index.js', 'Post Malone', 'testFileName']
    const results = await searchArtistService(process.argv[2])
    const expectedResults = formattedResults(results)
    const CSVData = readCSVData()
    const actualResults = CSVData.split('\n').slice(1)
    expect(actualResults).to.deep.equal(expectedResults)
  })
  it('returns data matching the CSV file for an artist name not present in the endpoint results', async () => {
    process.argv = ['node', 'index.js', 'thisnamedoesnotexist', 'testFileName']
    const results = await searchArtistService(process.argv[2])
    const expectedResults = formattedResults(results)
    const CSVData = readCSVData()
    const actualResults = CSVData.split('\n').slice(1)
    expect(actualResults).to.deep.equal(expectedResults)
  })
})
