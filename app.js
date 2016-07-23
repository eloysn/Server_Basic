"use strict";

var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var http = require('http');
var CronJob = require('cron').CronJob;
var url = 'http://www.no2.es/futbol/v2.php';
var json;










//var index = require('./routes/index');
//var users = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);



app.use('/', router);
router.get('/', function(req, res, next) {

    console.log('-------Reques Json-------');

    res.json(json);


});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

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


function respuestaJson(jsonString){
        var jsonParser = JSON.parse(jsonString);
        json = jsonParser;
        console.log("-----Download Json Futboll------" + new Date());




    }
    
}



var job = new CronJob('00 00 8 * * *', function() {


        console.log("------Init CronJob -------" + new Date());
        downloadJson();


    }, function () {

        /* This function is executed when the job stops */
    },
    true /* Start the job right now */
    /* Time zone of this job. */
);

downloadJson();
job.start();

module.exports = app;
