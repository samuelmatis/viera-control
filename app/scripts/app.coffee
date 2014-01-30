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
