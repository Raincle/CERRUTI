(function ($) {
  $.fn.isacover = function(params) {

    var defaults = {
      frameWidth:'default',
      frameHeight:'default',
      top:'default',
      bottom:'default',
      left:'default',
      right:'default',
    };

    params = params || {};
    var originalParams = {};
    for (var param in params) {
        if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
            originalParams[param] = {};
            for (var deepParam in params[param]) {
                originalParams[param][deepParam] = params[param][deepParam];
            }
        }
        else {
            originalParams[param] = params[param];
        }
    }
    for (var def in defaults) {
        if (typeof params[def] === 'undefined') {
            params[def] = defaults[def];
        }
        else if (typeof params[def] === 'object') {
            for (var deepDef in defaults[def]) {
                if (typeof params[def][deepDef] === 'undefined') {
                    params[def][deepDef] = defaults[def][deepDef];
                }
            }
        }
    }

    $(this).css({position:'absolute'});
    var frameDiv = $(this).parent();
    var frameDivDefaultPosition = 'relative';
    if (frameDiv[0].style.position != '') {frameDivDefaultPosition = frameDiv[0].style.position};
    frameDiv.css({position:frameDivDefaultPosition,overflow:'hidden'});

    var frameWidth = frameDiv.width();
    var frameHeight = frameDiv.height();

    var frameRatio = frameWidth / frameHeight;


    $(this).load(function() {
        var imgRatio = $(this).width()/$(this).height();



        if (imgRatio <= frameRatio) {
          var top,bottom;
          $(this).css({
              width:'100%',
              height:'auto',
              left:0,
          });
          if (params.top === 'default') {
            if (params.bottom === 'default') {
              bottom = (frameDiv.height() - frameDiv.width() / imgRatio) / 2;
            } else {
              bottom = params.bottom;
            }
            $(this).css({bottom:bottom});
          } else {
            top = params.top;
            $(this).css({top:top});
          };
        } else {
          var left,right;
          $(this).css({
              width:'auto',
              height:'100%',
              top:0
          });
          if (params.left === 'default') {
            if (params.right === 'default') {
              right = (frameDiv.width() - frameDiv.height() * imgRatio) / 2;
            } else {
              right = params.right;
            }
            $(this).css({right:right});
          } else {
            left = params.left;
            $(this).css({left:left});
          };
        };

        $(this).animate({opacity:1}, 'fast');
    });

  };
})(jQuery);
