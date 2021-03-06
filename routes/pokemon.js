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
  res.render('pokemon', {
    title: 'Pokemon'
  });
  console.log(data.rows[0].name);
})

/* select pokemon based on id number */
router.get('/:id', function(req, res, next) {
  knex.raw(`select * from pokemon where id = ${req.params.id}`)
    .then(function(data) {
      res.render('pokemon', {
        title: 'Pokemon',
        phrase: 'You Chose ',
        pokename: data.rows
      });
      console.log(data.rows[0].name);
    })
});

module.exports = router;
