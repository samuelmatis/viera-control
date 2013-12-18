$(".btn").each ->
  $(this).on "click", ->
    console.log $(this).data("action")
    $.post "/tv/action", $(this).data("action")
