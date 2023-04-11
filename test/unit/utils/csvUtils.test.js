const expect = require('chai').expect
const sinon = require('sinon')
const fs = require('fs')
const {
  DEFAULT_FILE_SAVE_PATH,
  UTF8_ENCODING,
} = require('../../../api/constants/constants')
const artistController = require('../../../api/controllers/artistController')
const artistService = require('../../../api/services/artistService')
const csvUtils = require('../../../api/utils/csvUtils')

describe('testing writeArtistsToCSVFile function', function () {
  it('should write the artist details to a csv file', async function () {
    const mockData = [
      {
        name: 'Artist 1',
        mbid: '1234',
        url: 'http://artist1.com',
        image_small_exists: true,
        image: [{ size: 'small', '#text': 'http://image1.com' }],
      },
      {
        name: 'Artist 2',
        mbid: '',
        url: '',
        image_small_exists: false,
        image: [{ size: 'small', '#text': '' }],
      },
    ]

    const writeFileSyncStub = sinon.stub(fs, 'writeFileSync')
    csvUtils.writeArtistsToCSVFile(mockData)
    sinon.assert.calledOnce(writeFileSyncStub)
    sinon.assert.calledWith(
      writeFileSyncStub,
      `${DEFAULT_FILE_SAVE_PATH}/testFileName.csv`,
      'Name,MBID,URL,Image (Small),Image\n"Artist 1","1234","http://artist1.com",true,http://image1.com\n"Artist 2",Data unavailable,Data unavailable,false,Data unavailable',
      UTF8_ENCODING,
    )

    writeFileSyncStub.restore()
  })
})
