const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain;charset=utf8",
        });
        res.end("Server error");
        return;
      }
      res.end(data.toString());
    });
  } else if (req.url === "/users" && req.method === "GET") {
    // JSON response
    res.writeHead(200, {
      "Content-Type": "Application/json;charset=utf8",
    });
    res.end(JSON.stringify({ value: "hello world", number: 114514 }));
  } else if (req.method === "GET" && req.headers.accept.includes("image/*")) {
    // send picture by using stream
    const pathToImg = `./${req.url}`;
    if (fs.existsSync(pathToImg)) {
      fs.createReadStream(pathToImg).pipe(res);
      return;
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain;charset=utf8");
    res.end("404 NOT FOUND");
  }
});
server.listen(3000);

console.log("server is listening on port 3000");
