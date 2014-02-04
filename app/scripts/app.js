FastClick.attach(document.body);

$(document).ready(function() {
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});

$('.js-ip-config').bind('click', function(e) {
	e.preventDefault();
	showIpConfig();
});

if(localStorage.getItem('ipAddress') === null) {
    showIpConfig();
} else {
    start();
}

function showIpConfig() {
	$("#ipModal").modal();
    $(".js-ip-save").on("click", function(e) {
        e.preventDefault();
        var ipAddress = $('#ipField').val()
        var ipRegExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        if(ipRegExp.test(ipAddress)) {
            localStorage.setItem('ipAddress', ipAddress);
            $("#ipModal").modal("hide");
            start();
        } else {
            alert("Invalid IP");
        }
    });
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
