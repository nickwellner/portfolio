$(window).scroll(function() {
    var scrollTopH = $(window).scrollTop();
    scrollAndReveal();
});

function scrollAndReveal() {
    var scrollTopH = $(window).scrollTop();
    var section1H = $('#section1').offset().top;
    var section2H = $('#section2').offset().top;
    var section3H = $('#section3').offset().top;
    var section4H = $('#section4').offset().top;
    var section5H = $('#section5').offset().top;

    // Show section 1
    if (scrollTopH <= section2H) {
        if (scrollTopH > section1H) {
            $('.image-viewer').removeClass("is-visible");
            $('#section-1').addClass("is-visible");
        }
    // Show section 2
    } else if (scrollTopH < section3H) {
        if (scrollTopH > section1H) {
            $('.image-viewer').removeClass("is-visible");
            $('#section-2').addClass("is-visible");
        }
    // Show section 3
    } else if (scrollTopH < section4H) {
        if (scrollTopH > section1H) {
            $('.image-viewer').removeClass("is-visible");
            $('#section-3').addClass("is-visible");
        }
    // Show section 4
    } else if (scrollTopH < section5H) {
        if (scrollTopH > section1H) {
            $('.image-viewer').removeClass("is-visible");
            $('#section-4').addClass("is-visible");
        }
    // Show section 5
    } else if (scrollTopH > section5H) {
        $('.image-viewer').removeClass("is-visible");
        $('#section-5').addClass("is-visible");
    }
}