var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false });
var queryParser = require('express-query-int');

app.use(bodyParser.json());
app.use(queryParser({
    parser: parseFloat
}));


app.get('/', function(req, res){
    res.send('Rose Parker');
});

app.get('/user/:name', function(req, res) {
    res.send('Welcome ' + req.params.name + '!');
});

app.get('/user', function(req, res) {
    var queryParam = req.query;
   res.send('The product of ' + queryParam.numone +' and ' +queryParam.numtwo + ' is ' + parseInt(queryParam.numone, 10) * parseInt(queryParam.numtwo, 10) + "!");
  
});

app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});