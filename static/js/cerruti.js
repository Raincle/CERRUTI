$(function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var contentState = "adverse";
    var introduceState = 0;

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

    function changeIntrduceState(state) {
        introduceState = introduceState + state;
        if (introduceState < -3) {
            introduceState = 0;
        } else if (introduceState > 0) {
            introduceState = -3;
        }
        var pageLeft = $('.contents-wrapper .introduce').width() * introduceState;
        $('.contents-wrapper .introduce .introduce-wrapper').animate({left: pageLeft}, 'normal');
    }

    $('.contents-wrapper .introduce .arrow-left').click(function() {
        changeIntrduceState(1);
    });

    $('.contents-wrapper .introduce .arrow-right').click(function() {
        changeIntrduceState(-1);
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
    //Adverse;
    relayoutBG('.contents-wrapper .adverse .adverse-wrapper .bg');
    //About;
    relayoutBG('.contents-wrapper .about .about-wrapper .bg');
    relayoutBG('.contents-wrapper .about .jason-avatar-wrapper img');
    relayoutBG('.contents-wrapper .about .peter-avatar-wrapper img');
    relayoutBG('.contents-wrapper .about .andres-avatar-wrapper img');
    //Introduce;
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-1 .bg');
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-2 .top-block img');
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-2 .bottom-block img');
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-4 .bg');
    //Product;
    relayoutBG('.contents-wrapper .product .product-wrapper .bg');
    //Interaction;
    relayoutBG('.contents-wrapper .interaction .page-1 .interaction-wrapper .bg');

});