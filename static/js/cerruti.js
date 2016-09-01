$(function() {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var contentState = "adverse";
    var introduceState = 0;
    var productState = 0;

    function changeContentState(state) {
        $('.contents-wrapper .content-item').css({display: 'none'});
        var className = '.contents-wrapper .' + state;
        $(className).css({display: 'block'});

        //Init Content;
        //Introduce;
        $('.contents-wrapper .introduce .introduce-wrapper').css({left: 0});
        //Product;
        $('.contents-wrapper .product .product-wrapper').css({display:'block'});
        $('.contents-wrapper .product .desc').css({display:'block'});
        $('.contents-wrapper .product .preview-wrapper').css({display:'block'});
        $('.contents-wrapper .product .arrow-left').css({display:'none'});
        $('.contents-wrapper .product .arrow-right').css({display:'none'});
        $('.contents-wrapper .product .img-gallery').css({display:'none'});
        $('.contents-wrapper .product .img-selector').css({display:'none'});
        //Interact;
        $('.contents-wrapper .interaction .page').css({display:'none'});
        $('.contents-wrapper .interaction .page-1').css({display:'block'});

    }

    $('.menu .menu-item').click(function() {
        contentState = $(this).attr("contentState");
        $('.tabs-wrapper .tab-item img').css({display:'block'});
        $('.tabs-wrapper .tab-item .selected').css({display:'none'});
        var className1 = '.tabs-wrapper .' + contentState + ' .selected';
        var className2 = '.tabs-wrapper .' + contentState + ' img';
        $(className2).css({display:'none'});
        $(className1).css({display:'block'});

        changeContentState(contentState);
    });

    $('.tabs-wrapper .tab-item').click(function() {
        contentState = $(this).attr("contentState");

        $('.tabs-wrapper .tab-item img').css({display:'block'});
        $('.tabs-wrapper .tab-item .selected').css({display:'none'});
        $(this).find('img').css({display:'none'});
        $(this).find('.selected').css({display:'block'});

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


    function changeProductState(state) {
        productState = productState + state;
        if (productState < -31) {
            productState = 0;
        } else if (productState > 0) {
            productState = -31;
        }
        var pageLeft = $('.contents-wrapper .product').width() * productState;
        $('.contents-wrapper .product .img-gallery').animate({left: pageLeft}, 'normal');
    }

    $('.contents-wrapper .product .arrow-left').click(function() {
        changeProductState(1);
    });

    $('.contents-wrapper .product .arrow-right').click(function() {
        changeProductState(-1);
    });

    function changeProductStateBySelector(state) {
        var pageLeft = $('.contents-wrapper .product').width() * state;
        $('.contents-wrapper .product .img-gallery').animate({left: pageLeft * -1}, 'normal');
    }


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
                    $("body").unbind("touchmove");

                    $('.cerruti .poster').remove();
                    $('.cerruti .menu').remove();

                    var imgGalleryInner = "";
                    for (var i=0;i< 32;i++) {
                        var img = "<img class='img-item' src='http://ocq36fh4i.bkt.clouddn.com/m" +
                            (i+1) +
                            ".jpg' alt=''>";
                        imgGalleryInner += img;
                    }
                    imgGalleryInner += "<div class='clear'></div>";
                    $('.img-gallery').html(imgGalleryInner).promise().done(function() {
                        $('.img-gallery .img-item').css({width: windowWidth * 0.8, marginLeft: windowWidth * 0.2 });
                        $('.img-gallery .img-item').first().css({marginLeft: windowWidth * 0.1 });
                    });

                    var imgSelectorInner = "";
                    for (var i=0;i< 32;i++) {
                        var img = "<img class='img-item' src='http://ocq36fh4i.bkt.clouddn.com/m" +
                            (i+1) +
                            ".jpg' alt='' stateValue='" +
                            i +
                            "'>";
                        imgSelectorInner += img;
                    }
                    imgSelectorInner += "<div class='clear'></div>";
                    $('.img-selector-wrapper').html(imgSelectorInner).promise().done(function() {
                        $('.img-selector .img-item').css({width: windowWidth / 9});
                        $('.img-selector-wrapper').css({width: windowWidth / 9 * 32});

                        $('.img-selector .img-item').click(function() {
                            var state = parseInt($(this).attr("stateValue"));
                            productState = -state;
                            changeProductStateBySelector(state);
                        });
                    });
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

    //Video;
    //$('.contents-wrapper .adverse .play-btn').click(function() {
    //    $(this).css({display:'none'});
    //    $('.contents-wrapper .adverse .adverse-wrapper .video-bg').css({display:'none'});
    //    $('.adverse #long-video').attr("src","http://v.qq.com/x/page/s0325ck991m.html");
    //});
    //
    //$('.contents-wrapper .about .play-btn').click(function() {
    //    $(this).css({display:'none'});
    //    $('.contents-wrapper .about .about-wrapper .video-bg').css({display:'none'});
    //    $('.about #long-video').attr("src","http://v.qq.com/x/page/u0325eehql1.html");
    //});
    //
    //$('.contents-wrapper .product .play-btn').click(function() {
    //    $(this).css({display:'none'});
    //    $('.contents-wrapper .product .product-wrapper .video-bg').css({display:'none'});
    //    $('.product #long-video').attr("src","http://v.qq.com/x/page/e0325ohjpbw.html");
    //});


    $('.preview-wrapper img').click(function() {
        $('.contents-wrapper .product .product-wrapper').css({display:'none'});
        $('.contents-wrapper .product .desc').css({display:'none'});
        $('.contents-wrapper .product .preview-wrapper').css({display:'none'});
        $('.contents-wrapper .product .arrow-left').css({display:'block'});
        $('.contents-wrapper .product .arrow-right').css({display:'block'});
        $('.contents-wrapper .product .img-gallery').css({display:'block'});
        $('.contents-wrapper .product .img-selector').css({display:'block'});
    });




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

    var choice = "";
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


    function nameValidation(name) {
        if (name == "") {
            $('.inputs-wrapper .name .error-tip').css({display:'block'});
            return false;
        } else {
            $('.inputs-wrapper .name .error-tip').css({display:'none'});
            return true;
        }
    }

    //function birthdayValidation(birthday) {
    //    if (birthday == "") {
    //        $('.inputs-wrapper .birthday .error-tip').css({display:'block'});
    //        return false;
    //    } else {
    //        $('.inputs-wrapper .birthday .error-tip').css({display:'none'});
    //        return true;
    //    }
    //}

    function districtValidation(district) {
        if (district == "请点击选择地区") {
            $('.inputs-wrapper .district .error-tip').css({display:'block'});
            return false;
        } else {
            $('.inputs-wrapper .district .error-tip').css({display:'none'});
            return true;
        }
    }

    function phonenumValidation(district,phonenum) {
        var isValidated = false;
        if (district == "中国大陆地区") {
            var check = /^1[3|4|5|7|8]\d{9}$/;
            isValidated = check.test(phonenum);
        } else if (district == "香港") {
            var check = /^[5|6|9|8]\d{7}$/;
            isValidated = check.test(phonenum);
        } else if (district == "澳门") {
            var check = /^6[0-9]{7}$/;
            isValidated = check.test(phonenum);
        } else if (district == "台湾") {
            var check = /^09\d{8}$/;
            isValidated = check.test(phonenum);
        } else if (district == "其他") {
            var check = /^[0-9]*$/;
            isValidated = check.test(phonenum);
        } else {
            isValidated = false;
        }

        if (isValidated) {
            $('.inputs-wrapper .phonenum .error-tip').css({display:'none'});
        } else {
            $('.inputs-wrapper .phonenum .error-tip').css({display:'block'});
        }

        return isValidated;
    }



    $('.contents-wrapper .interaction .page-3 .submit-btn').click(function() {
        var name = $('.inputs-wrapper .name input').val();
        var birthday = $('.inputs-wrapper .birthday input').val();
        var district = $('.inputs-wrapper .district .value').text();
        var phonenum = $('.inputs-wrapper .phonenum input').val();


        if (nameValidation(name) && districtValidation(district) && phonenumValidation(district,phonenum)) {
            if (choice == 'B') {
                $('.contents-wrapper .interaction .page').css({display:'none'});
                $('.contents-wrapper .interaction .page-4').css({display:'block'});
            } else {
                $('.contents-wrapper .interaction .page').css({display:'none'});
                $('.contents-wrapper .interaction .page-5').css({display:'block'});
            }
            //Send user info;
            function postSuccess(response) {
                console.log(response)
            }
            var dataToPost = {
                username: name,
                district: district,
                phonenum: phonenum,
                token: "xiaohong",
            }
            postData('',dataToPost,postSuccess)

        }


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