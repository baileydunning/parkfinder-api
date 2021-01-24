import express from 'express'
import cors from 'cors'
import parkData from './parkData'

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(cors())

app.locals.title = 'Parkfinder API'
app.locals.nationalParks = parkData.national

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.get('/', (request, response) => {
  const nationalParks = app.locals.nationalParks
  response.json({ nationalParks })
})

app.get('/:parkCode', (request, response) => {
  const { parkCode } = request.params
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)
  
  if (!park) {
    return response.sendStatus(404)
  }

  response.status(200).json(park)
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
