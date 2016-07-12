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



///////////////////////////////////Conexion db mysql

// var mysql = require('mysql');
//
//
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'node_mysql',
//   port: 8889
// });
//
// connection.connect(function(error){
//   if(error){
//     throw error;
//   }else{
//     console.log('Conexion correcta.');
//   }
// });
//
// var query = connection.query('SELECT name FROM user ', function (error, result) {
//   if(error){
//     throw error;
//   }else{
//     var resultado = result;
//     if(resultado.length > 0){
//       console.log(resultado[0]);
//     }else{
//       console.log('Registro no encontrado');
//     }
//   }
//
// });

////////////////////////////////////(((((((((((((((((((())))))))))))

///////////////////////////postgres_db//////////////////////////////

// var pg = require('pg');
// var conString = "postgres://puqckmidibljvw:yH9NcHHvyMRE_V8Sj4rAbJePpF@ec2-23-21-238-76.compute-1.amazonaws.com:5432/d9p0vu1qnrll9l";
// pg.defaults.ssl = true;
// pg.connect(conString, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');
//
//   client
//       .query('SELECT * FROM COM;')
//       .on('row', function(row) {
//
//
//       });
// });

////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





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

    res.json({'request': json});


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
        console.log(jsonParser);

    }
    
}

var job = new CronJob('00 00 18 * * *', function() {


        console.log("Download Json Futboll" + new Date());
        downloadJson();


    }, function () {

        /* This function is executed when the job stops */
    },
    true /* Start the job right now */
    /* Time zone of this job. */
);


job.start();

module.exports = app;
