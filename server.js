const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const artistRoute = require('./api/routes/artistRoute')
app.use('/api', artistRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Artist Search REST API Server started on port ${port}`)
})
