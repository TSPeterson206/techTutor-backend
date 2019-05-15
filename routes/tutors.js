const express = require('express')
const router = express.Router({
  mergeParams: true
})
const tutorsCtrl = require('../controllers/tutors')

router.get('/', tutorsCtrl.getAllTutors)
router.get('/:tutorId', tutorsCtrl.getOneTutor)
router.delete('/:tutorId', tutorsCtrl.deleteTutor)
router.post('/', tutorsCtrl.addTutor)
router.put('/:tutorId', tutorsCtrl.editTutor)
router.get('/:tutorId/technologies', tutorsCtrl.getOneTutorTechnologies)
router.post('/:tutorId/technologies', tutorsCtrl.editOneTutorTechnologies)
router.delete('/:tutorId/technologies', tutorsCtrl.deleteOneTutorTechnologies)

module.exports = router
