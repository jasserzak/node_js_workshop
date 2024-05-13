const http = require("node:http");
const { type } = require("node:os");

const server = http.createServer((req, res) => {
  res.writeHead(200, { content_type: "text/html" });
  res.end("<h1>hello Node! </h1>\n");
});
server.listen(3000, () => console.log("this server runs on the port 3000"));
