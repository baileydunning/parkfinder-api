
exports.up = (knex) => {
  return knex.schema
    .createTable('parks', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('state')
      table.text('image')
      table.string('parkCode')
    })
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('parks')
}
