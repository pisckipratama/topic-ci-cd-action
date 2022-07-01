var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({
    status: 200,
    message: "API running",
    data: []
  });
});

module.exports = router;
