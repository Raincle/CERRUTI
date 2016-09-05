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



var baseAPI = "http://api.uu32.com";


//Reuse Items;
$(function() {
});



//Common Functions;
function api(api) {
    return baseAPI + api;
};

function postData(apiSuffix,data,_success) {
    $.ajax({
        type: 'post',
        url: api(apiSuffix),
        data: data,
        corssDomain: true,
        dataType: "json",
        success: function(response) {
            switch (response.code) {
                case 1 :
                    _success(response);
                    break;
                case -1:
                    //alert(JSON.stringify(response.msg));
                    break;
                default:
                    //alert(apiSuffix+JSON.stringify(response.msg));
                    break;
            };
        }
    });
};


function getData(apiSuffix,data,_success) {
    $.ajax({
        type: 'get',
        url: apiSuffix,
        data: data,
        corssDomain: true,
        dataType: "json",
        success: function(response) {
            switch (response.code) {
                case 1 :
                    _success(response);
                    break;
                case -1:
                    //alert(JSON.stringify(response.msg));
                    break;
                default:
                    //alert(apiSuffix+JSON.stringify(response.msg));
                    break;
            };
        }
    });
};
