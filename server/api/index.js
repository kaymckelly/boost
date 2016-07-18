var express = require('express');
var router = express.Router();

router.use('/ask', require('./asks'));
router.use('/comments', require('./comments'));
router.use('/inspire', require('./inspire'));

module.exports = router;
