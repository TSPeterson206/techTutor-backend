const model = require('../models/technologies')

// function addOneTutorLocation (req, res, next) {
//   let {
//     goal,
//     user_id,
    
//   } = req.body
//   model.addGoal(req.body)
//     .then((result) => {
//       if (!result) {
//         return next({
//           status: 500,
//           message: 'error'
//         })
//       }
//       res.status(201).send({
//         goal,
//         user_id,
//         enddate,
//         created_at: result[0].created_at
//       })
//     })
//     .catch(next)
// }

function getOneTutorLocations (req, res, next) {
  model.getOneTutorLocations(req.params.tutorId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllLocations (req,res,next) {
  model.getAllLocations()
  .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function deleteOneTutorLocation (req,res,next) {
  model.deleteOneTutorLocation(req.oarams.tutorId)
  .then((result) => {
    res.status(200).send(result)
  })
  .catch(next)
}

module.exports = {
  getAllLocations,
  getOneTutorLocations, 
  deleteOneTutorLocation
  // addOneTutorLocation
}
