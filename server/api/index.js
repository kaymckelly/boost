var express = require('express');
var router = express.Router();

/* use  */
router.use('/ask', require('./asks'))

module.exports = router;
