(function(exports){

  module.exports = function(vieraControl, sendRequest) {

    //-------------
    // Basic commands
    //-------------
    vieraControl.get('/tv/:ip/power', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_POWER-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/:ip/menu', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_MENU-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/:ip/3d', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_3D-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/:ip/ok', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_ENTER-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/back', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_RETURN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/option', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_SUBMENU-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/cancel', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_CANCEL-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/apps', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_APPS-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/home', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_HOME-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/guide', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_GUIDE-ONOFF</X_KeyEvent>');
      res.end();
    });


    //-------------
    // Input
    //-------------
    vieraControl.get('/tv/:ip/input/tv', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_TV-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/input/av', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', "<X_KeyEvent>NRC_CHG_INPUT-ONOFF</X_KeyEvent>");
      res.end();
    });


    //-------------
    // Controls
    //-------------
    vieraControl.get('/tv/:ip/up', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_UP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/down', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_DOWN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/left', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_LEFT-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/right', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_RIGHT-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Volume
    //-------------
    vieraControl.get('/tv/:ip/volume/:vol', function(req, res) {
      sendRequest(req.params.ip, 'render', 'SetVolume', '<InstanceID>0</InstanceID><Channel>Master</Channel><DesiredVolume>'+req.params.vol+'</DesiredVolume>');
      res.end();
    });

    vieraControl.post("/tv/:ip/volume/plus", function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_VOLUP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.post("/tv/:ip/volume/minus", function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_VOLDOWN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/volume/mute', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_MUTE-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Channels
    //-------------
    vieraControl.get('/tv/:ip/channel/up', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_CH_UP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/channel/down', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_CH_DOWN-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Player
    //-------------
    vieraControl.get('/tv/:ip/player/rew', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_REW-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/player/play', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_PLAY-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/player/ff', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_FF-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/player/prev', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_SKIP_PREV-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/player/pause', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_PAUSE-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/player/next', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_SKIP_NEXT-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/player/stop', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_STOP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/player/rec', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_REC-ONOFF</X_KeyEvent>');
      res.end();
    });


    //-------------
    // Numbers
    //-------------
    vieraControl.get('/tv/:ip/num/:num', function(req, res) {
      if(req.params.num > 10 || req.params.num < 0) {
        res.send("Error, number out of range");
      } else {
        sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_D'+req.params.num+'-ONOFF</X_KeyEvent>');
        res.end();
      }
    });

    //-------------
    // Color buttons
    //-------------
    vieraControl.get('/tv/:ip/red', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_RED-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/green', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_GREEN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/yellow', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_YELLOW-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/:ip/blue', function(req, res) {
      sendRequest(req.params.ip, 'command', 'X_SendKey', '<X_KeyEvent>NRC_BLUE-ONOFF</X_KeyEvent>');
      res.end();
    });

  };

})(exports);
