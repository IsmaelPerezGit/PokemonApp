var express = require('express');
var router = express.Router();

var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'pokemon'
  }
});

/* GET pokemon page. */
router.get('/', function(req, res, next) {
  res.render('trainers', {
    title: 'Trainers'
  });
  console.log(data.rows[0].name);
})

/* select pokemon based on id number */
router.get('/:id', function(req, res, next) {
  knex.raw(`select * from trainers where id = ${req.params.id}`)
    .then(function(data) {
      res.render('trainers', {
        title: 'Trainers',
        phrase: 'You Chose ',
        trainerName: data.rows
      });
      console.log(data.rows[0].name);
    })
});

module.exports = router;
