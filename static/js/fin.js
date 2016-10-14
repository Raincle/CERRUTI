/**
 * Created by Hong on 14/10/2016.
 */

$(function() {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var contentState = "adverse";
    var introduceState = 0;
    var productState = 0;

    var ratio = 377/544;
    var screenRatio = windowWidth/windowHeight;

    if (ratio>screenRatio) {
        var finWidth = (windowHeight)*ratio;
        $('.fin').css({width:finWidth,height:windowHeight,left:(windowWidth-finWidth)/2});
    } else {
        $('.fin').css({width:windowWidth,height:windowWidth/ratio,left:0});
    }

});