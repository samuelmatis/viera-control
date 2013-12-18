# add FastClick to remove 300ms mobile delays
FastClick.attach document.body

# register click event for every button on page
$(".btn").each ->
  $(this).on "click", (e) ->
    e.preventDefault()
    $.post "/tv/action",
      action: $(this).data("action")

# bind key actions
action = (data) ->
  console.log data
  $.post "/tv/action",
    action: data

Mousetrap.bind "up", -> action "NRC_UP-ONOFF"
Mousetrap.bind "down", -> action "NRC_DOWN-ONOFF"
Mousetrap.bind "left", -> action "NRC_LEFT-ONOFF"
Mousetrap.bind "right", -> action "NRC_RIGHT-ONOFF"
Mousetrap.bind "enter", -> action "NRC_ENTER-ONOFF"
Mousetrap.bind "+", -> action "NRC_VOLUP-ONOFF"
Mousetrap.bind "-", -> action "NRC_VOLDOWN-ONOFF"
Mousetrap.bind "m", -> action "NRC_MENU-ONOFF"
Mousetrap.bind "escape", -> action "NRC_RETURN-ONOFF"
Mousetrap.bind "t+v", -> action "NRC_TV-ONOFF"
Mousetrap.bind "a+v", -> action "NRC_CHG_INPUT-ONOFF"
Mousetrap.bind "3+d", -> action "NRC_3D-ONOFF"
Mousetrap.bind "0", -> action "NRC_D0-ONOFF"
Mousetrap.bind "1", -> action "NRC_D1-ONOFF"
Mousetrap.bind "2", -> action "NRC_D2-ONOFF"
Mousetrap.bind "3", -> action "NRC_D3-ONOFF"
Mousetrap.bind "4", -> action "NRC_D4-ONOFF"
Mousetrap.bind "5", -> action "NRC_D5-ONOFF"
Mousetrap.bind "6", -> action "NRC_D6-ONOFF"
Mousetrap.bind "7", -> action "NRC_D7-ONOFF"
Mousetrap.bind "8", -> action "NRC_D8-ONOFF"
Mousetrap.bind "9", -> action "NRC_D9-ONOFF"
