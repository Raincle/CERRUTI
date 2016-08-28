function relayoutBG(selector) {

    var frameDiv = $(selector).parent();
    var windowRatio = frameDiv.width()/frameDiv.height();

    $(selector).load(function() {
        var imgRatio = $(this).width()/$(this).height();

        var centerLeft = (frameDiv.width()-frameDiv.height()*imgRatio)/ 2;
        var centerBottom = (frameDiv.height()-frameDiv.width()/imgRatio)/2;
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            centerBottom = 0;
        };

        if (imgRatio<=windowRatio) {
            $(selector).css({
                width:'100%',
                height:'auto',
                left:0,
                bottom:centerBottom
            });
        } else {
            $(selector).css({
                width:'auto',
                height:'100%',
                left:centerLeft,
                bottom:0
            });
        };
    });


}

