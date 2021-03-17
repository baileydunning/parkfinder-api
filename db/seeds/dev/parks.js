const parkData = require('../../../parkData')

const createPark = async (knex, park) => {
  await knex('parks').insert({
    name: park.name,
    state: park.state,
    parkCode: park.parkCode,
    image: park.image
  })
}

exports.seed = async (knex) => {
  try {
    await knex('parks').del()

    let parkPromise = parkData.national.map(park => {
      return createPark(knex, park)
    })

    return Promise.all(parkPromise)
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
}
