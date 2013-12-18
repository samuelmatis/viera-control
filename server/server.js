var application_root = __dirname,
  http = require('http'),
  express = require('express'),
  path = require('path');

// Create server
var app = express();

// Configure server
app.configure(function() {
  // Parses request bofy and populates request.body
  app.use( express.bodyParser() );

  // Checks request.body for HTTP method overrides
  app.use( express.methodOverride() );

  // Perform route lookup based on url and HTTP method
  app.use( app.router );

  // App logger
  app.use( express.logger());

  // Where to serve static content
  app.use( express.static( path.join( application_root, '../app' ) ) );

  // Show all errors in development
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true}) );
});

function buildBody(urn, action, key) {
   return '<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body> <u:'+action+' xmlns:u="urn:'+urn+'"><X_KeyEvent>'+key+'</X_KeyEvent></u:'+action+'></s:Body></s:Envelope>';
}

app.post('/tv/action', function(req, res){
  console.log(req.body.action);

  var body = buildBody("panasonic-com:service:p00NetworkControl:1", "X_SendKey", req.body.action);

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

app.listen(3000);
console.log('Listening on port 3000');
