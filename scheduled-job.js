"use strict";
var http = require('http');
var url = 'http://www.no2.es/futbol/v2.php';
var json;


var jsonObject =  {

    'request' : json

}




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

        json = jsonString
        console.log(json);
    }




}

downloadJson();

module.exports = jsonObject;