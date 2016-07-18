var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  
  // this is where I'm getting from: http://quotes.rest/qod.json?category=inspire

  // endpoint: http://quotes.rest/

  // for a JSON response: GET http://quotes.rest/qod.json

  // how to embed on a webpage:
  // <script type="text/javascript" src="https://theysaidso.com/gadgets/v2/theysaidso.js"></script>
  // <div class="tso_default_style">
  //   <script>TheySaidSo.render({ qod_category : 'inspire'});</script>
  // </div>
});

module.exports = router;
