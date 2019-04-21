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

// enough page 
app.get('/enough/privacy_policy', (req, res) => {
  res.render('min/pages/enough_policy');
});

// tutorials page 
app.get('/tutorials', (req, res) => {

        var tutorial_links = [
            {group: 'Xamarin UITest and Maintainability(not ready)',
                links: [
                    { title:'Lets Abstract This!(not ready)',
                      url: '/tutorials/uitest_abstaction'
                    },
                    { title:'Getting Raw With Calabash!(not ready)',
                    url: '/tutorials/uitest_calabash'
                      },
                    { title:'Unique Users For Unique Scenarios(not ready)',
                      url: '/tutorials/uitest_uniqueusers'
                    }
                ]
            },
            {group: 'Glitch Me Baby!',
            links: [
                { title:'Lets Abstract This!',
                  //url: '/tutorials/glitch_hexfiles'
                  url: 'http://blog.blanksparrow.com/post/61585665652'
                },
                { title:'Pretty Hex Examples',
                //url: '/tutorials/glitch_hexexamples'
                url: 'http://blog.blanksparrow.com/post/61585673576'
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
        {group: 'Current Projects',
            links: [
                { title:'[GAME] Enough',
                  url: 'https://twitter.com/search?f=tweets&q=enough%20from%3Ablanksparrow&src=typd'
                }
            ]
        },
        {group: '2017',
        links: [
            { title:'[GAME] Glitch Wood',
              url: 'http://www.asylumjam.com/games/glitch-wood/294919'
            }
        ]},
        {group: '2016',
        links: [
            { title:'[GAME] Fear The Light',
              url: 'https://itch.io/jam/lowrezjam2016/rate/62408'
            },
            { title:'[GAME] Buttons, Adventure & Explosions',
            url: 'https://blanksparrow.itch.io/bae'
          },
          { title:'[GAME] The Knot',
          url: 'https://blanksparrow.itch.io/the-knot'
        },
            { title:'[WEBSITE] CLICK for encouragement',
            url: 'http://twilightsurf.azurewebsites.net/'
              }
        ]},
        {group: '2015',
        links: [
            { title:'[GAME] Gone',
              url: 'https://blanksparrow.itch.io/gone'
            }
        ]},
        {group: '2014',
        links: [
            { title:'[GAME] Run Ant, Run!',
              url: 'https://blanksparrow.itch.io/run-ant'
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
