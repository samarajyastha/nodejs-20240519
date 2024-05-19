import http from "http";

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  response.statusCode = 500;

  response.end(JSON.stringify({ hello: "world", address: "Nepal" }));
});

const PORT = 5000;

server.listen(5000, () => {
  console.log(`Server running at port: ${PORT}`);
});
