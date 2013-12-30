(function(exports){

  module.exports = function(app, sendRequest) {

    //-------------
    // Basic commands
    //-------------
    app.get('/tv/power', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_POWER-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/menu', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_MENU-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/3d', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_3D-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/ok', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_ENTER-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/back', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_RETURN-ONOFF</X_KeyEvent>');
      res.end();
    });


    //-------------
    // Input
    //-------------
    app.get('/tv/input/tv', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_TV-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/input/av', function(req, res) {
      sendRequest('command', 'X_SendKey', "<X_KeyEvent>NRC_CHG_INPUT-ONOFF</X_KeyEvent>");
      res.end();
    });


    //-------------
    // Controls
    //-------------
    app.get('/tv/up', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_UP-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/down', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_DOWN-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/left', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_LEFT-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/right', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_RIGHT-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Volume
    //-------------
    app.get('/tv/volume', function(req, res) {
      var self = this;
      sendRequest('render', 'GetVolume', '<InstanceID>0</InstanceID><Channel>Master</Channel>',
        {
          callback: function(data){
            var match = /<CurrentVolume>(\d*)<\/CurrentVolume>/gm.exec(data);
            if(match !== null){
              res.send(match[1]);
            }
          }
        }
      );
    });

    app.get('/tv/volume/:vol', function(req, res) {
      sendRequest('render', 'SetVolume', '<InstanceID>0</InstanceID><Channel>Master</Channel><DesiredVolume>"+req.params.vol+"</DesiredVolume>');
      res.end();
    });

    app.post("/tv/volume/plus", function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_VOLUP-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.post("/tv/volume/minus", function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_VOLDOWN-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/volume/mute', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_MUTE-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Channels
    //-------------
    app.get('/tv/channel/up', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_CH_UP-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/channel/down', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_CH_DOWN-ONOFF</X_KeyEvent>');
      res.end();
    });


    //-------------
    // Color buttons
    //-------------
    app.get('/tv/red', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_RED-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/green', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_GREEN-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/yellow', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_YELLOW-ONOFF</X_KeyEvent>');
      res.end();
    });

    app.get('/tv/blue', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_BLUE-ONOFF</X_KeyEvent>');
      res.end();
    });

  };

})(exports);
