const expect = require('chai').expect
const sinon = require('sinon')
const {
  ARTIST_NAME_MISSING_ERROR,
  FILE_NAME_MISSING_ERROR,
} = require('../../../api/constants/constants')
const artistController = require('../../../api/controllers/artistController')
const artistService = require('../../../api/services/artistService')

describe('searchArtistsController', function () {
  it('should return 400 and an error message if artist name is missing', async function () {
    const req = {}
    const res = {
      status: function (statusCode) {
        expect(statusCode).to.equal(400)
        return this
      },
      json: function (data) {
        expect(data.message).to.equal(ARTIST_NAME_MISSING_ERROR)
        return this
      },
    }
    process.argv = ['node', 'index.js', '', 'testFileName']
    await artistController.searchArtistsController(req, res)
  })

  it('should return 400 and an error message if file name is missing', async function () {
    const req = {}
    const res = {
      status: function (statusCode) {
        expect(statusCode).to.equal(400)
        return this
      },
      json: function (data) {
        expect(data.message).to.equal(FILE_NAME_MISSING_ERROR)
        return this
      },
    }
    process.argv = ['node', 'index.js', 'artistname', '']
    await artistController.searchArtistsController(req, res)
  })

  it('should return an array of artists if artist name is provided', async function () {
    const req = {}
    const res = {
      json: function (data) {
        expect(data.artists).to.be.an('array')
        return this
      },
    }
    process.argv = ['node', 'index.js', 'artistName', 'testFileName']
    const spy = sinon.spy(artistService, 'searchArtistService')
    await artistController.searchArtistsController(req, res)
    expect(spy.calledOnceWith('artistName')).to.be.true
    spy.restore()
  })

  it('should return an error message if an error occurs in the service', async function () {
    const req = {}
    const res = {
      status: function (statusCode) {
        expect(statusCode).to.equal(500)
        return this
      },
      json: function (data) {
        const expected = `Some error occurred`
        expect(`${data.message}`).to.equal(expected)
        return this
      },
    }
    process.argv = ['node', 'index.js', 'artistName', 'testFileName']
    sinon
      .stub(artistService, 'searchArtistService')
      .rejects('Some error occurred')
    await artistController.searchArtistsController(req, res)
    artistService.searchArtistService.restore()
  })
  it('should return a list of artists if search is successful', async function () {
    const req = {}
    const res = {
      json: function (data) {
        expect(data.artists).to.deep.equal(['artist1', 'artist2', 'artist3'])
        return this
      },
    }
    process.argv = ['node', 'index.js', 'artistName', 'testFileName']
    sinon
      .stub(artistService, 'searchArtistService')
      .resolves(['artist1', 'artist2', 'artist3'])
    await artistController.searchArtistsController(req, res)
    artistService.searchArtistService.restore()
  })
})
