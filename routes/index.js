var express = require('express');
var router = express.Router();
var jsonRequest = require('../scheduled-job')



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(jsonRequest);
  res.json(jsonRequest);


});



module.exports = router;


