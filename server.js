// server.js
// load the things we need
var port = process.env.PORT || 1337;

var express = require('express');
var compression = require('compression');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('view cache', true);

app.use(compression());

// add public directories to app
['css', 'js', 'images', 'fonts'].forEach((public_dir) => {
    app.use("/" + public_dir, express.static(__dirname + "/public/" + public_dir));
});

// use res.render to load up an ejs view file

// index page 
app.get('/', (req, res) => {
    res.render('min/pages/index');
});

// about page 
app.get('/about', (req, res) => {
    res.render('min/pages/about');
});

// mask page 
app.get('/mask', (req, res) => {
    res.render('min/pages/mask');
});

app.listen(port);
console.log(port + ' is the magic port');
