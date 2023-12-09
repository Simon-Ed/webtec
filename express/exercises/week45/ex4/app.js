let express = require('express');
let http = require('http');
let path = require('path');

let app = express();

let publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.end('Welcome to my homepage!');
})

app.get('/about', function(req, res) {
    res.end('Welcome to about homepage!');
})

app.get('/weather', function(req, res) {
    res.end('So the weather is nice today, huh?');
})

app.get('/hello/:who', function(req, res) {
    res.end('Hello, ' + req.params.who + '.');
})

app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404!")
})

http.createServer(app).listen(3000);