var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false });
var queryParser = require('express-query-int');

app.use(bodyParser.json());
app.use(queryParser({
    parser: parseFloat
}));

//gets my personal name
app.get('/', function(req, res){
    res.send('Rose Parker');
    
});

//gets input on url and returns it to user
app.get('/user/:name', function(req, res) {
    res.send('Welcome ' + req.params.name + '!');
});

//gets 2 numbers numone and numtwo on the url query and multiplies them to return as response
app.get('/user', function(req, res) {
    var queryParam = req.query;
   res.send('The product of ' + queryParam.numone +' and ' +queryParam.numtwo + ' is ' + parseInt(queryParam.numone, 10) * parseInt(queryParam.numtwo, 10) + "!");
  
});

app.get('/login', function(req, res) {
    res.sendFile('./public/index.html', {root: __dirname});
});
app.post('/login', function(req, res){
    var user = req.body.username;
    var pass = req.body.password;
    if(user === "user" && pass === "pass") {
        res.json(200, { success: 'Logged in' });
    } else {
        res.json(500, { error: 'invalid credentials' });
    }
    
});

app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});