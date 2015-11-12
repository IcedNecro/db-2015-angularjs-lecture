var http 	= require("http")
var express = require("express");
var app     = express();
var path    = require("path");

console.info('roman')

/*http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("It's alive!");
  response.end();
}).listen(3000);
*/
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/static', express.static('static'));
app.use('/bower_components', express.static('bower_components'));

app.listen(3000);

console.log("Running at Port 3000");