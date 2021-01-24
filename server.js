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
  
  if (!park) {
    return response.sendStatus(404)
  }

  response.status(200).json(park)
})

app.get('/nationalParks/:parkCode/reviews', (request, response) => {
  const { parkCode } = request.params
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return response.sendStatus(404)
  }

  response.status(200).json(park.reviews)
})

app.post('/nationalParks/:parkCode/reviews', (request, response) => {
  const { parkCode } = request.params
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)
  const id = Date.now()
  const review = request.body

  for (let requiredParameter of ['name', 'parkReview']) {
    if (!review[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { name: <String>, parkReview: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

    const { name, parkReview } = review
    app.locals.nationalParks[parkCode].reviews.push({ id, name, parkReview })
    response.status(200).json(`Thanks for submitting a review for ${park.name}!`)
})
