exports.up = function (knex, Promise) {
  return knex.schema.createTable('locations', table => {
    table.increments()
    table.string('name')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('locations')
}
