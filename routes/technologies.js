const express = require('express')
const router = express.Router({
  mergeParams: true
})
const technologiesCtrl = require('../controllers/technologies')

router.get('/:tutorId/technologies', technologiesCtrl.getOneTutorTechnologies)
router.post('/:tutorId/technologies', technologiesCtrl.editOneTutorTechnologies)
router.delete('/:tutorId/technologies', technologiesCtrl.deleteOneTutorTechnologies)
// router.delete('/goals/:goalId', technologiesCtrl.deleteGoal)

module.exports = router
