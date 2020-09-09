$(document).ready(function() {
    $("#mobilemenubutton").unbind("click").click(function() {
        $("#mobilenavigation").parent().addClass("active");
    });
    
    $("#mobilenavigation a").unbind("click").click(function() {
        $("#mobilenavigation").parent().removeClass("active");
    });
});
