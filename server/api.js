(function(exports){

  module.exports = function(vieraControl, sendRequest) {

    //-------------
    // Basic commands
    //-------------
    vieraControl.get('/tv/power', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_POWER-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/menu', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_MENU-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/3d', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_3D-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/ok', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_ENTER-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/back', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_RETURN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/option', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_SUBMENU-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/cancel', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_CANCEL-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/apps', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_APPS-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/home', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_HOME-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/guide', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_GUIDE-ONOFF</X_KeyEvent>');
      res.end();
    });


    //-------------
    // Input
    //-------------
    vieraControl.get('/tv/input/tv', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_TV-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/input/av', function(req, res) {
      sendRequest('command', 'X_SendKey', "<X_KeyEvent>NRC_CHG_INPUT-ONOFF</X_KeyEvent>");
      res.end();
    });


    //-------------
    // Controls
    //-------------
    vieraControl.get('/tv/up', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_UP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/down', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_DOWN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/left', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_LEFT-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/right', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_RIGHT-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Volume
    //-------------
    vieraControl.get('/tv/volume', function(req, res) {
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

    vieraControl.get('/tv/volume/:vol', function(req, res) {
      sendRequest('render', 'SetVolume', '<InstanceID>0</InstanceID><Channel>Master</Channel><DesiredVolume>"+req.params.vol+"</DesiredVolume>');
      res.end();
    });

    vieraControl.post("/tv/volume/plus", function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_VOLUP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.post("/tv/volume/minus", function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_VOLDOWN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/volume/mute', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_MUTE-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Channels
    //-------------
    vieraControl.get('/tv/channel/up', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_CH_UP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/channel/down', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_CH_DOWN-ONOFF</X_KeyEvent>');
      res.end();
    });



    //-------------
    // Player
    //-------------
    vieraControl.get('/tv/player/rew', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_REW-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/player/play', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_PLAY-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/player/ff', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_FF-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/player/prev', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_SKIP_PREV-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/player/pause', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_PAUSE-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/player/next', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_SKIP_NEXT-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/player/stop', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_STOP-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/player/rec', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_REC-ONOFF</X_KeyEvent>');
      res.end();
    });


    //-------------
    // Numbers
    //-------------
    vieraControl.get('/tv/num/1', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D1-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/2', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D2-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/3', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D3-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/4', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D4-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/5', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D5-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/6', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D6-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/7', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D7-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/8', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D8-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/9', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D9-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/num/0', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_D0-ONOFF</X_KeyEvent>');
      res.end();
    });


    //-------------
    // Color buttons
    //-------------
    vieraControl.get('/tv/red', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_RED-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/green', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_GREEN-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/yellow', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_YELLOW-ONOFF</X_KeyEvent>');
      res.end();
    });

    vieraControl.get('/tv/blue', function(req, res) {
      sendRequest('command', 'X_SendKey', '<X_KeyEvent>NRC_BLUE-ONOFF</X_KeyEvent>');
      res.end();
    });

  };

})(exports);
