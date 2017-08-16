var express = require('express');
var router = express.Router();

var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Pokemon Selector'
  });
});

router.get('/', function(req,res,next) {
  res.render('trainers')
})

module.exports = router;
