var express = require('express');
var router = express.Router();
var knex = require('../knex');
var bodyParser = require('body-parser');

function comments() {
  return knex('comments');
}

/* POST comment */
router.post('/', function(req, res, next) {
  comments().insert({ ask_id: asks.id, commenter_id: 2, comment: req.body.comment })
    .then(function() {
      res.send('comment posted');
    })
    .catch(function(err) {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
