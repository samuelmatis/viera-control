var application_root = __dirname,
  http = require('http'),
  express = require('express'),
  path = require('path');

// Create server
var app = express();

// Configure server
app.configure(function() {
  app.use( express.bodyParser() );
  app.use( express.methodOverride() );
  app.use( app.router );
  app.use( express.logger());
  app.use( express.static( path.join( application_root, '../app' ) ) );
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true}) );
});

function buildBody(action) {
   return '<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:X_SendKey xmlns:u="urn:panasonic-com:service:p00NetworkControl:1"><X_KeyEvent>' + action + '</X_KeyEvent></u:X_SendKey></s:Body></s:Envelope>';
}

app.post('/tv/action', function(req, res){
  console.log(req.body.action);

  var body = buildBody(req.body.action);

  var postRequest = {
      host: "10.127.1.102",
      path: "/nrc/control_0",
      port: 55000,
      method: "POST",
      headers: {
          'SOAPACTION': '"urn:panasonic-com:service:p00NetworkControl:1#X_SendKey"',
          'Content-Type': 'text/xml'
      }
  };

  var req = http.request(postRequest);
  req.write(body);
  req.end();
  res.end();
});

// Run server
app.listen(3000);
console.log('Listening on port 3000');
