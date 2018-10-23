var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false });


app.get('/', function(req, res){
    res.send('Rose Parker');
});

app.get('/user/:name', function(req, res) {
    res.send('Welcome ' + req.params.name + '!');
});


app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});