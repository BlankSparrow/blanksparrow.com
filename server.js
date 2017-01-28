// server.js
// load the things we need
var port = process.env.PORT || 1337;

var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// add public directories to app
['css','js','images','fonts'].forEach(function(public_dir){
    app.use("/" + public_dir ,express.static(__dirname + "/public/" + public_dir));
});

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// mask page 
app.get('/mask', function(req, res) {
    res.render('pages/mask');
});

app.listen(port);
console.log(port + ' is the magic port');
