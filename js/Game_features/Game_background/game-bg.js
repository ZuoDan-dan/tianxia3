/**
 * Created by Administrator on 2017/7/31 0031.
 */
$(document).ready(function() {
    //首先将#back-to-top隐藏
    $("#backTop").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $("#backTop").fadeIn(500);
            } else {
                $("#backTop").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#backTop").click(function () {
            $('body,html').animate({
                    scrollTop: 0
                },
                0);
            return false;
        });
    });


    function Hover(hover_a, show_a) {  //hovera:$(".liLog")   show_a:$("#loginList")
        var timer;
        hover_a.hover(function () {
            show_a.css("display", "block");
        }, function () {
            timer = setTimeout(function () {
                show_a.css("display", "none");
            }, 500)
        });
        show_a.hover(function () {
            if (show_a.css("display", "block")) {
                clearTimeout(timer);
                show_a.css("display", "block");
            }
        }, function () {
            setTimeout(function () {
                show_a.css("display", "none");
            }, 500);
        });
    }

    Hover($(".liLog"), $("#loginList"));
    Hover($(".li6"), $("#share-more"));
});
