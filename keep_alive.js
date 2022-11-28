var http = require('http');

http.createServer(function (req, res) {
  res.write("Chapo Is Real 2022 <br>");
  res.write("Why are you even here?");
  res.end();
}).listen(8080);