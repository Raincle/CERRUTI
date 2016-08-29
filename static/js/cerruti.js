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
    //Introduce;
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-1 .bg');
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-2 .top-block img');
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-2 .bottom-block img');
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-3 .top-block img');
    relayoutBG('.contents-wrapper .introduce .introduce-wrapper .page-4 .bg');
    //Product;
    //Interaction;

    $('.contents-wrapper .interaction .enter-btn').click(function() {
        $('.contents-wrapper .interaction .page').css({display:'none'});
        $('.contents-wrapper .interaction .page-3').css({display:'block'});
    });

    $('.contents-wrapper .interaction .issues').click(function() {
        $('.contents-wrapper .interaction .page').css({display:'none'});
        $('.contents-wrapper .interaction .page-2').css({display:'block'});
    });

    $('.contents-wrapper .interaction .back-btn').click(function() {
        $('.contents-wrapper .interaction .page').css({display:'none'});
        $('.contents-wrapper .interaction .page-1').css({display:'block'});
    });

    var rightAnswer = "A"
    var choice = ""
    $('.contents-wrapper .interaction .page-3 .options-wrapper .option').click(function() {
        $('.contents-wrapper .interaction .page-3 .options-wrapper .choice-icon').css({display:'none'});
        $(this).find('.choice-icon').css({display:'block'});
        choice = $(this).attr('optionValue');
        console.log(choice);
    });

    $('.inputs-wrapper .district-input .value').click(function() {
        $('.inputs-wrapper .district-input .districts-wrapper').css({display:'block'});
        $('.inputs-wrapper .district-input .districts-wrapper').animate({height:80}, 'fast');
    });

    $('.inputs-wrapper .district-input .districts-wrapper p').click(function() {
        $('.inputs-wrapper .district-input .value').text($(this).text());
        $('.inputs-wrapper .district-input .districts-wrapper').animate({height:0}, 'fast', function() {
            $('.inputs-wrapper .district-input .districts-wrapper').css({display:'none'});
        });
    });

    $('.contents-wrapper .interaction .page-3 .submit-btn').click(function() {
        if (choice == 'B') {
            $('.contents-wrapper .interaction .page').css({display:'none'});
            $('.contents-wrapper .interaction .page-4').css({display:'block'});
        } else {
            $('.contents-wrapper .interaction .page').css({display:'none'});
            $('.contents-wrapper .interaction .page-5').css({display:'block'});
        }
        //Send user info;
    });

    $('.contents-wrapper .interaction .page-5 .back-to-choose-btn').click(function() {
        $('.contents-wrapper .interaction .page').css({display:'none'});
        $('.contents-wrapper .interaction .page-3').css({display:'block'});
    });

    $('.contents-wrapper .interaction .page-5 .back-to-main-btn').click(function() {
        $('.contents-wrapper .interaction .page').css({display:'none'});
        $('.contents-wrapper .interaction .page-1').css({display:'block'});
    });

    $('.contents-wrapper .interaction .page-5 .go-to-website-btn').click(function() {
        window.location.href = "http://www.cerruti.com";
    });
});