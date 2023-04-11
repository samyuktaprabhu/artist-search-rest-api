const fs = require('fs')
const {
  DEFAULT_FILE_SAVE_PATH,
  UTF8_ENCODING,
  DATA_UNAVAILABLE_MESSAGE,
  IMAGE_SIZE_SMALL,
} = require('../constants/constants')
const writeArtistsToCSVFile = (data) => {
  const artistsData = data.map(({ name, mbid, url, image }) => [
    '"' + name + '"',
    mbid !== '' ? '"' + mbid + '"' : DATA_UNAVAILABLE_MESSAGE,
    url !== '' ? '"' + url + '"' : DATA_UNAVAILABLE_MESSAGE,
    image.find((img) => img.size === IMAGE_SIZE_SMALL)['#text'] !== ''
      ? true
      : false,
    image.find((img) => img.size === IMAGE_SIZE_SMALL)['#text'] !== ''
      ? image.find((img) => img.size === IMAGE_SIZE_SMALL)['#text']
      : DATA_UNAVAILABLE_MESSAGE,
  ])

  const header = ['Name', 'MBID', 'URL', 'Image (Small)', 'Image']
  const csv = [header, ...artistsData].map((row) => row.join(',')).join('\n')
  fs.writeFileSync(
    `${DEFAULT_FILE_SAVE_PATH}/${process.argv[3]}.csv`,
    csv,
    UTF8_ENCODING,
  )
}

module.exports = {
  writeArtistsToCSVFile,
}
