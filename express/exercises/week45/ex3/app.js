let express = require('express');
let http = require('http');

let app = express();

app.use(function(req, res, next) {
    console.log('In comes a ' + req.method + ' to ' + req.url);
    next();
});

app.use(function(req, res, next) {
    let minute = (new Date()).getMinutes();
    if(minute % 2 === 0) {
        next();
    } else {
        res.statusCode = 403;
        res.end('Not authorized!');
    }
})

app.use(function(req, res) {
    res.end('FLAG{cosmic_secret}');
})

http.createServer(app).listen(3000);