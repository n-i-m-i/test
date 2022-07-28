const http = require('http');
const hostname = 'localhost';
const port = 5000

const server = http.createServer((req, res) => {
    res.statusCode(200);
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello DevDojo!\n')
});

server.listen(port, hostname, () => {
    console.log('server running at http://${hostname}:${port}/');
}
)