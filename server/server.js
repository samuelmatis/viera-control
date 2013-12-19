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

var ipAddress = "";
var self = this;

// Method for sending requests
var sendRequest = function(url, urn, action, options) {
   var body = "<?xml version='1.0' encoding='utf-8'?>\n"+
   "<s:Envelope xmlns:s='http://schemas.xmlsoap.org/soap/envelope/' s:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/'>\n"+
   " <s:Body>\n"+
   "  <u:"+action+" xmlns:u='urn:"+urn+"'>\n"+
   "   "+options['args']+"\n"+
   "  </u:"+action+">\n"+
   " </s:Body>\n"+
   "</s:Envelope>\n";

   var postRequest = {
    host: "10.127.1.102",
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
  if(options.hasOwnProperty('callback')) {
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

app.post('/tv/setip', function(req,res) {
  self.ipAddress = req.body.ip;
});

app.post('/tv/action', function(req, res) {
  sendRequest(
    '/nrc/control_0',
    'panasonic-com:service:p00NetworkControl:1',
    'X_SendKey',
    {
      args: "<X_KeyEvent>"+req.body.action+"</X_KeyEvent>"
    }
  );
  res.end();
});

app.get('/tv/volume', function(req, res) {
  var self = this;
  sendRequest(
    '/dmr/control_0',
    'schemas-upnp-org:service:RenderingControl:1',
    'GetVolume',
    {
      args: "<InstanceID>0</InstanceID><Channel>Master</Channel>",
      callback: function(data){
        var regex = /<CurrentVolume>(\d*)<\/CurrentVolume>/gm;
        var match = regex.exec(data);
        if(match !== null){
          var volume = match[1];
          res.send(volume);
        }
      }
    }
  );
});

app.get('/tv/volume/:vol', function(req, res) {
  sendRequest(
    '/dmr/control_0',
    'schemas-upnp-org:service:RenderingControl:1',
    'SetVolume',
    {
      args: "<InstanceID>0</InstanceID><Channel>Master</Channel><DesiredVolume>"+req.params.vol+"</DesiredVolume>"
    }
  );
  res.end();
});

app.get('/tv/volume/mute/:opt', function(req, res) {
  if (req.params.opt == 1 || req.params.opt == "true")
    data = 1;
  else if (req.params.opt == 0 || req.params.opt == "false")
    data = 0;
  else
    data = 0;

  sendRequest(
    '/dmr/control_0',
    'schemas-upnp-org:service:RenderingControl:1',
    'SetMute',
    {
      args: "<InstanceID>0</InstanceID><Channel>Master</Channel><DesiredMute>"+data+"</DesiredMute>"
    }
  );
  res.end();
})

// Run server
app.listen(3000);
console.log('Listening on port 3000');
