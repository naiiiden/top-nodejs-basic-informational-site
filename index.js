const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    res.end('hi i\'m nano');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});