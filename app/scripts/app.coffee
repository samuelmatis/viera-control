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

Mousetrap.bind ["up", "down", "left", "right"], (e, combo) ->
  combo = combo.toUpperCase()
  action "NRC_"+combo+"-ONOFF"

Mousetrap.bind ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], (e, combo) -> action "NRC_D"+combo+"-ONOFF"

Mousetrap.bind
  "+": -> action "NRC_VOLUP-ONOFF"
  "-": -> action "NRC_VOLDOWN-ONOFF"
  "m": -> action "NRC_MENU-ONOFF"
  "escape": -> action "NRC_RETURN-ONOFF"
  "t+v": -> action "NRC_TV-ONOFF"
  "a+v": -> action "NRC_CHG_INPUT-ONOFF"
  "3+d": -> action "NRC_3D-ONOFF"
