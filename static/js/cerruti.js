$(function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

        //Scroll;
    $(".cerruti").onepage_scroll({
        sectionContainer: "section",
        easing: "ease",

        animationTime: 1000,
        pagination: true,
        updateURL: false,
        beforeMove: function(index) {},
        afterMove: function(index) {
            switch (index) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                default:
                    break;
            }
        },
        loop: false,
        keyboard: true,
        responsiveFallback: false,
        direction: "vertical"
    });

    $('.onepage-pagination').css({
        top:(windowHeight-$('.onepage-pagination').height())/2
    });
    $('body').on('touchmove', function (event) {
        event.preventDefault();
    },false);

});