const express = require('express')
const cors = require('cors')
const request = require('request')
const parkData = require('./parkData')

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(cors())

const makeApiCall = (url) => {
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (err, res, body) => {
      if (err) reject(err)
      resolve(body)
    })
  })
}

app.locals.title = 'Parkfinder API'
app.locals.nationalParks = parkData.national

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.get('/', (req, res) => {
  const nationalParks = app.locals.nationalParks
  res.json({ nationalParks })
})

app.get('/api/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})

app.get('/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  res.status(200).json(park)
})

app.get('/:parkCode/reviews', (request, response) => {
  const { parkCode } = request.params
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return response.sendStatus(404)
  }

  response.status(200).json(park.reviews)
})

app.post('/:parkCode/reviews', (request, response) => {
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
  park.reviews.push({ id, name, parkReview })
  response.status(200).json(`Thanks for submitting a review for ${park.name}!`)
})
