const knex = require('../db/knex')

// function addAFavorite (body) {
//   return knex('tutors_locations')
//     .insert({
//       'user_id': body.user_id,
//       'provider_id': body.provider_id
//     })
//     .returning('*')
//     .then(result => result)
// }

function getOneTutorLocations (userId) {
  return knex('tutors')
    .select('.*', 'favorites.*')
    .where({
      'user_id': userId
    })
    .innerJoin('providers', 'tutors_locations.location_id', 'locations.id')
}

function deleteOneTutorLocations (locationId) {
  return knex('tutors_locations')
    .where({
      'id': locationId
    })
    .del()
    .returning('*')
}

module.exports = {
  // addAFavorite,
  getOneTutorLocations,
  deleteOneTutorLocations
}
