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
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

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

// tutorials page 
app.get('/tutorials', (req, res) => {

        var tutorial_links = [
            {group: 'Xamarin UITest and Maintainability',
                links: [
                    { title:'Lets Abstract This!',
                      url: '/tutorials/uitest_abstaction'
                    },
                    { title:'Getting Raw With Calabash!',
                    url: '/tutorials/uitest_calabash'
                      },
                    { title:'Unique Users For Unique Scenarios',
                      url: '/tutorials/uitest_uniqueusers'
                    }
                ]
            },
            {group: 'Glitch Me Baby!',
            links: [
                { title:'Lets Abstract This!',
                  url: '/tutorials/glitch_hexfiles'
                },
                { title:'Pretty Hex Examples',
                url: '/tutorials/glitch_hexexamples'
                  }
            ]}
        ]
    
        res.render('min/pages/tutorials_index',
        {links: tutorial_links});
        
    });

// tutorials page 
app.get('/tutorials/:page', (req, res) => {

    res.render('min/pages/tutorials_post',
    { page: req.params.page});  
});

// portfolio page
app.get('/portfolio', (req, res) => {
    var portfolio_links = [
        {group: '2017',
            links: [
                { title:'Lets Abstract This!',
                  url: '/portfolio/uitest_abstaction'
                },
                { title:'Getting Raw With Calabash!',
                url: '/portfolio/uitest_calabash'
                  },
                { title:'Unique Users For Unique Scenarios',
                  url: '/tutorials/uitest_uniqueusers'
                }
            ]
        },
        {group: '2016',
        links: [
            { title:'Lets Abstract This!',
              url: '/portfolio/glitch_hexfiles'
            },
            { title:'Pretty Hex Examples',
            url: '/portfolio/glitch_hexexamples'
              }
        ]}
    ]

    res.render('min/pages/portfolio_index',
    {links: portfolio_links});
});

// portfolio page 
app.get('/portfolio/:page', (req, res) => {
    
        res.render('min/pages/portfolio_post',
        { page: req.params.page});  
    });

app.listen(port);
console.log(port + ' is the magic port');
