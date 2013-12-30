var application_root = __dirname,
  http = require('http'),
  express = require('express'),
  path = require('path');

// Create server
var vieraControl = express();

// Configure server
vieraControl.configure(function() {
  vieraControl.use( express.bodyParser() );
  vieraControl.use( express.methodOverride() );
  vieraControl.use( vieraControl.router );
  vieraControl.use( express.logger());
  vieraControl.use( express.static( path.join( application_root, '../app' ) ) );
  vieraControl.use( express.errorHandler({ dumpExceptions: true, showStack: true}) );
});

var ipAddress = "10.127.1.102";

// Method for sending requests
var sendRequest = function(type, action, command, options) {
  var url, urn;
  if(type == "command") {
    url = "/nrc/control_0";
    urn = "panasonic-com:service:p00NetworkControl:1";
  } else if (type == "render") {
    url = "/dmr/control_0";
    urn = "schemas-upnp-org:service:RenderingControl:1";
  }

   var body = "<?xml version='1.0' encoding='utf-8'?> \
   <s:Envelope xmlns:s='http://schemas.xmlsoap.org/soap/envelope/' s:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/'> \
    <s:Body> \
     <u:"+action+" xmlns:u='urn:"+urn+"'> \
      "+command+" \
     </u:"+action+"> \
    </s:Body> \
   </s:Envelope>";

   console.log(command + "\n");

   var postRequest = {
    host: ipAddress,
    path: url,
    port: 55000,
    method: "POST",
    headers: {
      'Content-Length': body.length,
      'Content-Type': 'text/xml; charset="utf-8"',
      'SOAPACTION': '"urn:'+urn+'#'+action+'"'
    }
  };

  var self = this;
  if(options !== undefined) {
    self.callback = options['callback'];
  } else {
    self.callback = function(data){ console.log(data) };
  }

  var req = http.request(postRequest, function(res) {
    res.setEncoding('utf8');
    res.on('data', self.callback);
  });

  req.on('error', function(e) {
    console.log('error: ' + e.message);
    console.log(e);
  });

  req.write(body);
  req.end();
}

vieraControl.get('/tv/setip/:ip', function(req,res) {
  if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(req.params.ip)) {
    ipAddress = req.params.ip;
    res.send("ok")
  } else {
    res.send("invalid ip")
  }
});

vieraControl.post('/tv/action', function(req, res) {
  sendRequest('command', 'X_SendKey', '<X_KeyEvent>'+req.body.action+'</X_KeyEvent>');
  res.end();
});

// Require the API
// Comment this if you don't want to use API
require('./api')(vieraControl, sendRequest);


// Run server
vieraControl.listen(3000);
console.log('Listening on port 3000');
