/**
 * Created by admin on 2017/8/20.
 */
//背景图片轮播
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 5000; //轮播时间间隔
    length = $('.slider-panel').length;
    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    /*
     向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /*
     从preIndex页翻到currentIndex页
     preIndex 整数，翻页的起始页
     currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).hide()
            .parent().children().eq(currentIndex).show();
    }
    /*
     开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    //开始轮播
    start();
});

$(".nav-btn,.nav").mouseover(function(){
    $(".nav").show();
});
$(".nav").mouseout(function(){
    $(".nav").hide();
    $(".nav-btn").show();
});
$(".li1 .prev,.li79 .next").click(function(){
    $(".li1").hide();
    $(".li79").hide();
    $(".li80").show();
});
$(".li1 .next,.li3 .prev").click(function(){
    $(".li1").hide();
    $(".li3").hide();
    $(".li2").show();
});
$(".li2 .prev,.li80 .next").click(function(){
    $(".li2").hide();
    $(".li80").hide();
    $(".li1").show();
});
$(".li2 .next,.li4 .prev").click(function(){
    $(".li2").hide();
    $(".li4").hide();
    $(".li3").show();
});
$(".li3 .next,.li5 .prev").click(function(){
    $(".li3").hide();
    $(".li5").hide();
    $(".li4").show();
});
$(".li4 .next,.li6 .prev").click(function(){
    $(".li4").hide();
    $(".li6").hide();
    $(".li5").show();
});
$(".li5 .next,.li7 .prev").click(function(){
    $(".li5").hide();
    $(".li7").hide();
    $(".li6").show();
});
$(".li6 .next").click(function(){
    $(".li6").hide();
    $(".li7").show();
});
$(".li75 .next,.li77 .prev").click(function(){
    $(".li75").hide();
    $(".li77").hide();
    $(".li76").show();
});
$(".li76 .prev").click(function(){
    $(".li76").hide();
    $(".li75").show();
});
$(".li76 .next,.li78 .prev").click(function(){
    $(".li76").hide();
    $(".li78").hide();
    $(".li77").show();
});
$(".li77 .next,.li79 .prev").click(function(){
    $(".li77").hide();
    $(".li79").hide();
    $(".li78").show();
});
$(".li78 .next,.li80 .prev").click(function(){
    $(".li78").hide();
    $(".li80").hide();
    $(".li79").show();
});

//点击环形色彩
$(function(){
    $(".circle div").click(function(){
        setTimeout(function () {
            $(".wrap").hide();
        },2000);
        setTimeout(function () {
            $(".kk").hide();
        },3500);
        $(".slideWrap li,.black li").css("display","none");
        $(".slideShow").show();
        $(".nav-btn").show();
        var index=$(this).index();   //获取当前索引
        $(".slideWrap li").eq(index).css("display","block");
        $(".black li").eq(index).css("display","block");
    });
});

//全屏模式切换
(function ($) {
    $.support.fullscreen = supportFullScreen();

    $.fn.fullScreen = function (props) {
        if (!$.support.fullscreen || this.length != 1) {
            return this;
        }
        if (fullScreenStatus()) {
            cancelFullScreen();
            return this;
        }

        var options = $.extend({
            'background': '#111',
            'callback': function () {}
        }, props);
        var fs = $('<div>', {
            'css': {
                'overflow-y': 'auto',
                'background': options.background,
                'width': '100%',
                'height': '100%',
                'align': 'center'
            }
        });

        var elem = this;
        elem.addClass('fullScreen');
        fs.insertBefore(elem);
        fs.append(elem);
        requestFullScreen(fs.get(0));

        fs.click(function (e) {
            if (e.target == this) {
                cancelFullScreen();
            }
        });

        elem.cancel = function () {
            cancelFullScreen();
            return elem;
        };

        onFullScreenEvent(function (fullScreen) {
            if (!fullScreen) {
                elem.removeClass('fullScreen').insertBefore(fs);
                fs.remove();
            }
            options.callback(fullScreen);
        });
        return elem;
    };

    function supportFullScreen() {
        var doc = document.documentElement;
        return ('requestFullscreen' in doc) ||
            ('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
            ('webkitRequestFullScreen' in doc);
    }

    function requestFullScreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
    }

    function fullScreenStatus() {
        return document.fullscreen ||
            document.mozFullScreen ||
            document.webkitIsFullScreen;
    }

    function cancelFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

    function onFullScreenEvent(callback) {
        $(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function () {
            callback(fullScreenStatus());
        });
    }
})(jQuery);

$(function () {
    $(".fullscreen-btn img").click(function () {
        $(".slideShow").fullScreen();
        $(".black").hide();
    })
});

$(function () {
    $(".share-btn img").mouseover(function () {
        $('.share-btn img').attr('src', '../../../../public/images/Game_features/Scene_display/colors/sharezw.png');
    })
    $(".share-btn img,.NIE-share-more").mouseover(function () {
        $(".NIE-share-more").show();
    })
    $(".share-btn img,.NIE-share-more").mouseout(function () {
        $(".NIE-share-more").hide();
    })
});
$(function () {
    $(".share-btn img").mouseout(function () {
        $('.share-btn img').attr('src', '../../../../public/images/Game_features/Scene_display/colors/share-btn.png');
    })
});


$(function () {
    $(".fullscreen-btn img").mouseover(function () {
        $('.fullscreen-btn img').attr('src', '../../../../public/images/Game_features/Scene_display/colors/qpzw.png');
    })
});
$(function () {
    $(".fullscreen-btn img").mouseout(function () {
        $('.fullscreen-btn img').attr('src', '../../../../public/images/Game_features/Scene_display/colors/qp.png');
    })
});
$(function () {
    $(".close-btn img").mouseover(function () {
        $('.close-btn img').attr('src', '../../../../public/images/Game_features/Scene_display/colors/closezw.png');
    })
});
$(function () {
    $(".close-btn img").mouseout(function () {
        $('.close-btn img').attr('src', '../../../../public/images/Game_features/Scene_display/colors/close-btn.png');
    })
});


