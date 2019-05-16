exports.seed = function (knex, Promise) {
  return knex('tutors_technologies').insert([
    { id: 1, tech_id:1, tutor_id:1 },
    { id: 2, tech_id:2, tutor_id:7 },
    { id: 3, tech_id:3, tutor_id:8 },
    { id: 4, tech_id:4, tutor_id:2 },
    { id: 5, tech_id:5, tutor_id:1 },
    { id: 6, tech_id:6, tutor_id:3 },
    { id: 7, tech_id:7, tutor_id:4 },
    { id: 8, tech_id:8, tutor_id:9 },
    { id: 9, tech_id:9, tutor_id:10 },
    { id: 10, tech_id:10, tutor_id:11 },
    { id: 11, tech_id:11, tutor_id:5 },
    { id: 12, tech_id:12, tutor_id:2 },
    { id: 13, tech_id:1, tutor_id:1 },
    { id: 14, tech_id:12, tutor_id:3 },
    { id: 15, tech_id:3, tutor_id:4 },
    { id: 16, tech_id:4, tutor_id:1 },
    { id: 17, tech_id:5, tutor_id:6 },
    { id: 18, tech_id:6, tutor_id:7 },
    { id: 19, tech_id:1, tutor_id:8 },
    { id: 20, tech_id:9, tutor_id:1 },
    { id: 21, tech_id:10, tutor_id:1 },
    { id: 22, tech_id:11, tutor_id:8 },
    { id: 23, tech_id:11, tutor_id:9 },
    { id: 24, tech_id:12, tutor_id:1 },
    { id: 25, tech_id:6, tutor_id:7 },
    { id: 26, tech_id:7, tutor_id:4 },
    { id: 27, tech_id:8, tutor_id:3 },
    { id: 28, tech_id:9, tutor_id:2 },
    { id: 29, tech_id:10, tutor_id:1 },
    { id: 30, tech_id:11, tutor_id:10 },
    { id: 31, tech_id:12, tutor_id:11 },
    { id: 32, tech_id:1, tutor_id:12 },
    { id: 33, tech_id:12, tutor_id:1 },
    { id: 34, tech_id:3, tutor_id:1 },
    { id: 35, tech_id:4, tutor_id:10 },
    { id: 36, tech_id:5, tutor_id:11 },
    { id: 37, tech_id:6, tutor_id:3 },
    { id: 38, tech_id:1, tutor_id:4 },
    { id: 39, tech_id:9, tutor_id:5 },
    { id: 40, tech_id:10, tutor_id:6 },
    { id: 41, tech_id:11, tutor_id:7 },
    { id: 42, tech_id:11, tutor_id:8 },
    { id: 43, tech_id:12, tutor_id:9 }
  ])
    .then(() => {
      return knex.raw("SELECT setval('tutors_technologies_id_seq', (SELECT MAX(id) FROM tutors_technologies));")
    })
}