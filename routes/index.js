var express = require('express');
var router = express.Router();
var CronJob = require('cron').CronJob;

var url = 'http://www.no2.es/futbol/v2.php';
var json;
function downloadJson(){

  var body = '';
  http.get(url, function(res){


    res.on('data', function(chunk){
      body += chunk;


    });

    res.on('end', function(resn){
      respuestaJson(body);

    });
  }).on('error', function(e){
    console.log("Got an error: ", e);



  });


}

function respuestaJson(jsonString){

  json = jsonString
  console.log(json);
}


var job = new CronJob('1 * * * * *', function() {


      console.log("trabajo cada cinco segundos");


    }, function () {

      /* This function is executed when the job stops */
    },
    true /* Start the job right now */
    /* Time zone of this job. */
);


job.start();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(jsonRequest);
  res.json({'request': jsonRequest});


});



module.exports = router;


