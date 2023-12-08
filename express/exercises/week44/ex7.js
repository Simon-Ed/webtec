let http = require('http');

function reqHandler(req, res) {
    console.log('In comes a request to: ' + req.url);
    res.end('Hello, world!');
}

let server = http.createServer(reqHandler);

server.listen(3000);