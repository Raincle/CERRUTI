$(function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var contentState = "adverse";

    function changeContentState(state) {
        $('.contents-wrapper .content-item').css({display: 'none'});
        var className = '.contents-wrapper .' + state;
        $(className).css({display: 'block'});
    }

    $('.menu .menu-item').click(function() {
        contentState = $(this).attr("contentState");
        changeContentState(contentState);
    });

    $('.tabs-wrapper .tab-item').click(function() {
        contentState = $(this).attr("contentState");
        changeContentState(contentState);
    });

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
        display: 'none',
        top:(windowHeight-$('.onepage-pagination').height())/2
    });
    $('body').on('touchmove', function (event) {
        event.preventDefault();
    },false);


    $('.poster .down-arrow').click(function() {
        $(".cerruti").moveDown();
    });
    $('.menu .menu-item').click(function() {
        $(".cerruti").moveDown();
    });
    //Img process;
    relayoutBG('.poster .main-img-wrapper img');
    relayoutBG('.menu .menu-item .bg');
    relayoutBG('.contents-wrapper .addverse .adverse-wrapper .bg');

});