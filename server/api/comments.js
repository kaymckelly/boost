var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET random ask */
// router.get('/', function(req, res, next) {
//   knex('asks').select('id').then(function(ids) {
//     var randomIndex = Math.floor(ids.length*Math.random());
//     var randomId = ids[randomIndex].id;
//     knex('asks').where('id', randomId).first().then(function(ask) {
//       res.json(ask);
//     })
//   })
// });

module.exports = router;
