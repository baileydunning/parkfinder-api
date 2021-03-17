
exports.up = (knex) => {
  return knex.scheme
    .createTable('parks', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('state')
      table.string('image')
      table.string('parkCode')
    })
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('parks')
}
