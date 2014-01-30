# add FastClick to remove 300ms mobile delays
FastClick.attach document.body

# check if ip address is set
$.get "tv/ip", (data) ->
  if data.error
    $("#ipModal").modal()
    $(".js-ip-save").unbind()
    $(".js-ip-save").on "click", (e) ->
      e.preventDefault()
      $.get "/tv/ip/" + $("#ipField").val(), (data) ->
        $("#ipModal").modal "hide"
        start()
  else start() if data.ip

# start function
start = ->

  # send action to the TV
  action = (data) ->
    $.post "/tv/action",
      action: data

  # register click event for every control button on page
  $(".btn").each ->
    $(this).on "click", (e) ->
      e.preventDefault()
      $(this).blur()
      $.post "/tv/action", "action": $(this).data("action")
      $("ipModal").modal("hide")

  # update volume text
  setInterval (->
    $.get "tv/volume", (data) ->
      $(".vol").text "Volume - " + data
  ), 1000

  Mousetrap.bind ["up", "down", "left", "right"], (e, combo) ->
    action "NRC_" + combo.toUpperCase() + "-ONOFF"

  Mousetrap.bind ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], (e, combo) ->
    action "NRC_D" + combo + "-ONOFF"

  Mousetrap.bind
    "+": action("NRC_VOLUP-ONOFF")
    "-": action("NRC_VOLDOWN-ONOFF")
    m: action("NRC_MENU-ONOFF")
    escape: action("NRC_RETURN-ONOFF")
    "t+v": action("NRC_TV-ONOFF")
    "a+v": action("NRC_CHG_INPUT-ONOFF")
    "3+d": action("NRC_3D-ONOFF")

