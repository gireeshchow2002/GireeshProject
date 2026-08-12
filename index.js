var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('** Hey my app was deployed :) **'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80


package-lock.json

{
  "name": "papa-node-hello-000",
  "version": "1.0.0",
  "lockfileVersion": 1
}
