/**
 * Created by Administrator on 2017/8/18 0018.
 */
$(function () {
    $(window).scroll(function() {
        var a = $(this).scrollTop();
        console.log(a);
        if(a>=600){
            $("#rSlider").css({"top":"4px","position":"fixed"});
        }else{
            $("#rSlider").css({"top":"600px","position":"absolute"});
        }
    });
});