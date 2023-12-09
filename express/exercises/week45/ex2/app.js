let express = require('express');
let http = require('http');

let app = express();

app.use(function(req, res, next) {
    console.log('In comes a ' + req.method + ' to ' + req.url);
    next();
});

app.use(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello next!")
})

http.createServer(app).listen(3000);