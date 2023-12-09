let express = require('express');
let http = require('http')
let path = require('path');
let engines = require('consolidate')

let app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.engine('wal', engines.walrus);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        message: 'Hey everyone! This is ejs!',
        message2: 'tomato blue red albow',
        num1: 1234,
        num2: 321
    })
})

http.createServer(app).listen(3000);