$( window ).on( "load",function() {
    
});


function initCarousel() {
    initCarousel("ScreenshotsCarouselID", {
        loop:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:4,
            }
        }
    });
}

function initCarousel(id, options) {
    var carousel = jQuery('#' + id);

    if(!carousel.length) {
        return;
    }

    carousel.owlCarousel(options);
}

$("#emailform").submit(function(e) {
    e.preventDefault();
    $.post('/api/email', $('#emailform').serialize());
    $('#emailform').parent().addClass('posted');
});

