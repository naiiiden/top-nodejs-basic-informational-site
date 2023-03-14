const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.end('<p>hi i\'m nano</p>');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});