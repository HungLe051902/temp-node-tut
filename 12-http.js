const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
    <p>Oop</p>
    <a href = '/'>back</a>
  `);
  }
  if (req.url === "/about") {
    res.end("About");
  }
  res.end(`
    <p>Oop</p>
    <a href = '/'>back</a>
  `);
});

server.listen(50);
