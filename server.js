const express = require('express')
const app = express()
const cors = require('cors')
const parkData = require('./parkData')

app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(cors())

app.locals.title = 'Parkfinder API'
app.locals.nationalParks = parkData.national

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.get('/', (request, response) => {
  response.send(app.locals.title)
})

app.get('/nationalParks', (request, response) => {
  const nationalParks = app.locals.nationalParks
  response.json({ nationalParks })
})

app.get('/nationalParks/:parkCode', (request, response) => {
  const { parkCode } = request.params
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  response.status(200).json(park)
})
