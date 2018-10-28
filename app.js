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
app.get('/user/:name', (req, res) =>{
    res.send('Welcome ' + req.params.name + '!');
});

//Is it a word or number? Send a certain response based on url query parameter
app.get('/wordornum', (req, res) => {
    var queryParam = req.query;
    var word = queryParam.word;
    if(word){
        JSON.stringify(word);
        const letter = [];
        for(let i = 0; i < word.length; i++) {
        letter.push(i);
            //setTimeout(function timer(){
                //letter.push(i)}, 3000);
        res.write(word.charAt(i) + "\r");
    }
    }else{
  res.send('The product of ' + queryParam.numone +' and ' +queryParam.numtwo + ' is ' + parseInt(queryParam.numone, 10) * parseInt(queryParam.numtwo, 10) + "!");
    }
});

//html form for login
app.get('/login', function(req, res) {
    res.sendFile('./public/index.html', {root: __dirname});
});

//login if else statement works on server and on postman
app.post('/login', function(req, res){
    const user = req.body.user;
    const pass = req.body.pass;
    if(user === "rose" && pass === "hello") {
        res.status(200).json({ success: 'Logged in' });
    } else {
        res.status(500).json({ error: 'invalid credentials' });
    }
    
});

//posts new item to an array in post man

var iAm = ["Intelligence", "Peace", "Love"];

app.post('/affirm', function(req, res, next) {
    const item = req.body.item;
    const isNewIam = iAm.indexOf(item);
    if (isNewIam === -1){ //if it's not a duplicate
        iAm.push(item);
        res.status(200).json({ result: iAm });
    } else {
        res.status(500).json({ error: item+ ' is a duplicate item' });
     }
     next();
});

//delete route for deleting item in array variable

app.delete('/delete', function(req, res) {
    const item = req.body.item;
   var index = iAm.indexOf(item);
   if(index !== -1) {
       iAm.splice(index, 1);
       res.status(302).json({result: iAm});
   } else {
       res.status(404).json("Item you'd like to delete is not found");
   }
});

app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});