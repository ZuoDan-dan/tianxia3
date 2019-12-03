/**
 * Created by admin on 2017/7/22.
 */
$("#toTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, '0');
});
$(function(){
    var a = $("#toTop"),
        b =a.offset();
    $(document).on('scroll',function(){
        var c = $(document).scrollTop();
        if(c>b.top){
            a.css({'display':'block'})
        }else{
            a.css({'display':'none'})
        }
    })
});
$(function(){
    var a = $(".nav"),
        b =a.offset();
    $(document).on('scroll',function(){
        var c = $(document).scrollTop();
        if(c>b.top){
            a.css({'position':'fixed','top':'0px'})
        }else{
            a.css({'position':'absolute','top':'0px'})
        }
    })
});