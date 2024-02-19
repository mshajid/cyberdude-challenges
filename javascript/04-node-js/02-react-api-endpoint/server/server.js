const http = require("http");
const internsData = require("./data/interns.json")

const SERVER_PORT = 4455;

http
  .createServer(function (request, response) {
    response.write(JSON.stringify(internsData));
    response.end();
  })
  .listen(SERVER_PORT);
