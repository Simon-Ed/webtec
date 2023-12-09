let express = require('express');
let http = require('http');

let app = express();

app.use(function(req, res) {
    console.log('In comes a request to: ' + req.url);
    res.end('Hello internet user!');
})

http.createServer(app).listen(3000);