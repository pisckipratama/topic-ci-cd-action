var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({
    status: 200,
    message: "API running",
    data: [
      {
        "id": 1,
        "name": "John Doe",
        "gender": "male",
        "age": 25
      },
      {
        "id": 2,
        "name": "Sheila Ottoelia",
        "gender": "female",
        "age": 24
      }
    ]
  });
});

module.exports = router;
