const model = require('../models/locations')

// function addAFavorite (req, res, next) {
//   let {
//     user_id,
//     provider_id
//   } = req.body

//   model.addAFavorite(req.body)
//     .then((result) => {
//       if (!result) {
//         return next({
//           status: 500,
//           message: 'error'
//         })
//       }
//       res.status(201).send({
//         user_id,
//         provider_id
//       })
//     })
//     .catch(next)
// }

function getOneTutorLocations (req, res, next) {
  model.getOneTutorLocations(req.params.userId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function deleteOneTutorLocations (req, res, next) {
  return model.deleteOneTutorLocations(req.params.locationId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

module.exports = {
  // addAFavorite,
  getOneTutorLocations,
  deleteOneTutorLocations
}
