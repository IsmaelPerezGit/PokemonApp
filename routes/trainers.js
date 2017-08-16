var express = require('express');
var router = express.Router();

var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'pokemon'
  }
});

//list all trainers
router.get('/', function(req, res, next) {
  knex.raw(`select * from trainers`)
    .then(function(data) {
      res.render('trainers', {
        trainerRows: data.rows

      });
    })
})

//get form to create new trainer
router.get('/new', function(req, res, next) {
  res.render('newtrainer');
})

//creates new trainer
router.post('/', function(req,res,next) {
  knex.raw(`insert into trainers (name) values ('${req.body.name}')`)
  .then(function(){
    res.redirect('/trainers')
  })
})

/* select trainer based on id number */
router.get('/:id', function(req, res, next) {
  knex.raw(`select trainers.name, pokemon.name as "pokemon_name" from trainers join pokemon on trainer_id = trainers.id where trainers.id = ${req.params.id}`)
    .then(function(data) {
      res.render('trainerinfo', {
        trainerName: data.rows[0],
        trainersName: data.rows,
        id: parseInt(req.params.id)
      });
    })
})

//update

//edit

//delete
router.post('/:id/delete', function(req,res,next){
  knex.raw(`delete from trainers where id = ${req.params.id}`)
  .then(function(){
    res.redirect('/trainers')


  })
})




module.exports = router;
