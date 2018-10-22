var express = require("express");
var app = express();


app.get('/', function(req, res){
    res.send('Rose Parker');
});



app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});