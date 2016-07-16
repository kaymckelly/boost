var express = require('express');
var router = express.Router();
var knex = require('../knex');
var bodyParser = require('body-parser');

function comments() {
  return knex('comments');
}

/* POST comment */
router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.user);
  comments().insert({ ask_id: req.body.ask_id, commenter_id: req.user.id, comment: req.body.comment })
    .then(function() {
      res.json('comment posted');
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
