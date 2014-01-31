FastClick.attach(document.body);

if(localStorage.getItem('ipAddress') === null) {
    $("#ipModal").modal();
    $(".js-ip-save").on("click", function(e) {
        e.preventDefault();
        var ipAddress = $('#ipField').val()
        localStorage.setItem('ipAddress', ipAddress);
        $("#ipModal").modal("hide");
        start();
    });
} else {
    start();
}

function start() {
    var ipAddr = localStorage.getItem('ipAddress');
    $(".btn").each(function() {
        $(this).on("click", function(e) {
            e.preventDefault();
            $(this).blur();
            $.post("/tv/" + ipAddr + "/action", {"action": $(this).data("action")});
            $("ipModal").modal("hide");
        });
    });

    setInterval((function() {
        $.get("tv/" + ipAddr + "/volume", function(data) {
            $(".vol").text("Volume - " + data);
        });
    }), 1000);
};
