const express = require('express')
const app = express()

app.set('port', process.env.PORT || 4000)
app.locals.title = 'Parkfinder API'

app.get('/', (request, response) => {
  response.send(app.locals.title)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})