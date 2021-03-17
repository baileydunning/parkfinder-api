const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const express = require('express')
const cors = require('cors')
const request = require('request')
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

app.locals.title = 'National Parkfinder API'

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.get('/api/v1/parks', async (req, res) => {
  try {
    const parks = await database('parks').select()
    res.status(200).json(parks)
  } catch(error) {
    res.status(500).json({ error })
  }
})

app.get('/api/v1/parks/:parkCode', async (req, res) => {
  const { parkCode } = req.params
  try {
    const parks = await database('parks').select()
    const foundPark = parks.find(park => park.parkCode === parkCode)
    res.status(200).json(foundPark)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.get('/api/v1/nps/:parkCode', (req, res) => {
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

app.get('/api/v1/nps/alerts/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})

app.get('/api/v1/nps/articles/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/articles?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})

app.get('/api/v1/nps/campgrounds/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})

app.get('/api/v1/nps/lessonplans/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/lessonplans?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})

app.get('/api/v1/nps/places/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/places?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})

app.get('/api/v1/nps/thingstodo/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/thingstodo?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})

app.get('/api/v1/nps/webcams/:parkCode', (req, res) => {
  const { parkCode } = req.params
  const url = `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
  const park = app.locals.nationalParks.find(park => park.parkCode === parkCode)

  if (!park) {
    return res.sendStatus(404)
  }

  makeApiCall(url)
    .then(response => res.json({ response }))
    .catch(error => res.send(error))
})
