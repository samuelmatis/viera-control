FastClick.attach document.body
$(".btn").each ->
  $(this).on "click", ->
    console.log "data", $(this).data("action")
    $.post "/tv/action",
      action: $(this).data("action")
