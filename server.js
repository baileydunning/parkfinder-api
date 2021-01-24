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

app.get('/parks', (request, response) => {
  const nationalParks = app.locals.nationalParks
  response.json({ nationalParks })
})
