(function __curio(statID) {
    var networkType;
    var params = window.QueryString || {};
    var openid = params.openid || "";
    var from_openid = params.from_openid || "";

    function sendStat(type) {
        var packet = {
            "type": type,
            "openid": openid || "",
            "unionid": "",
            "from_openid": from_openid,
            "from_unionid": "",
            "network": networkType || ""
        };
        window.curio.send(statID, packet);
    }

    window.wx.ready(function() {
        window.wx.getNetworkType({
            success: function(res) {
                networkType = res.networkType;
                sendStat("pageview");
            }
        });

        window.wx.onMenuShareTimeline({
            title: window.wechat_setting.timeline.title,
            link: window.wechat_setting.timeline.link + (openid ? ("?from_openid=" + openid) : ""),
            imgUrl: window.wechat_setting.timeline.imgUrl,
            success: function() {
                sendStat("timeline");
            }
        });

        window.wx.onMenuShareAppMessage({
            title: window.wechat_setting.friend.title,
            desc: window.wechat_setting.friend.desc,
            link: window.wechat_setting.friend.link + (openid ? ("?from_openid=" + openid) : ""),
            imgUrl: window.wechat_setting.friend.imgUrl,
            success: function() {
                sendStat("friend");
            }
        });
    });
})("171187d1-24b6-47e9-bd54-178ddd9caeac");
