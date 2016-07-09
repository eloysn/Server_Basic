var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({'name': 'Elo'});
});


router.get('/:id/:name', function(req, res, next) {
  console.log(req.params);
  res.render('index', { title: 'Id' });
});
module.exports = router;
