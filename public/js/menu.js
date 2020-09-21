$(document).ready(function() {
    $("#mobilemenubutton").unbind("click").click(function() {
        $("#mobilenavigation").parent().addClass("active");
    });
    
    $("#mobilenavigation a").unbind("click").click(function() {
        $("#mobilenavigation").parent().removeClass("active");
    });
});

$(window).on("load", function() {
    updateMenuState();
})


$(window).scroll(function() {
    updateMenuState();
});

const scrollMenuActivationLead = 200;

function updateMenuState() {
    var position = $(window).scrollTop();
    position += scrollMenuActivationLead;

    $('#navigation > ul > li > a').each(function() {
        const href = $(this).attr("href")
        if(href[0] === "#" && href[1] !== "#") {
            var id = href.substr(1);
        } else if(href[1] === "#") {
            var id = href.substr(2);
        } else {
            return;
        }

        
        var target = $("#"+id);

        if (target && position >= target.offset()?.top) {
            $('#navigation > ul > li > a').removeClass('active');
            $('#navigation > ul > li > a[href="' + href + '"]').addClass('active');
            $('#mobilenavigation > ul > li > a').removeClass('active');
            $('#mobilenavigation > ul > li > a[href="' + href + '"]').addClass('active');
        } else {
            $('#navigation > ul > li > a[href="' + href + '"]').removeClass('active');
            $('#mobilenavigation > ul > li > a[href="' + href + '"]').removeClass('active')
        }
    });
}
