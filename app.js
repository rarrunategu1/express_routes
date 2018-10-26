var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var queryParser = require('express-query-int');


app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

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
    const user = req.body.user;
    const pass = req.body.pass;
    if(user === "rose" && pass === "hello") {
        res.json(200, { success: 'Logged in' });
    } else {
        res.json(500, { error: 'invalid credentials' });
    }
    
});

//posts new item to an array

var iAm = ["Intelligence", "Peace", "Love"];

app.post('/affirm', function(req, res) {
    const item = req.body.item;
    const isNewIam = iAm.indexOf(item);
    if (isNewIam === -1){ //if it's not a duplicate
        iAm.push(item);
        res.status(200).json({ result: iAm });
    } else {
        res.status(500).json({ error: item+ ' is a duplicate item' });
     }
});

app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});