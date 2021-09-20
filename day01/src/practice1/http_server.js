const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf8',
        })
        res.end('Server error');
        // throw err;
        return;
      }
      res.end(data.toString());
    });
  }
});
server.listen(3000);

console.log('server is listening on port 3000');
