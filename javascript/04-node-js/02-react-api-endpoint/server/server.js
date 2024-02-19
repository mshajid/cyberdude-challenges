const http = require("http");

const SERVER_PORT = 4455;

http.createServer(function (request, response) {
  console.log("server is running la");
  response.write("Is server working? After fixing")
  response.end()
}).listen(SERVER_PORT)
