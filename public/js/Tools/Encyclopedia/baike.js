/**
 * Created by admin on 2017/8/4.
 */
$(".current,.ulLoglist").mouseover(function(){
    $(".ulLoglist").show();
});

$(".current,.ulLoglist").mouseout(function(){
    $(".ulLoglist").hide();
});
$(function(){
    var a = $(".nav"),
        b =a.offset();
    $(document).on('scroll',function(){
        var c = $(document).scrollTop();
        if(c>b.top){
            a.css({'position':'fixed','top':'0px'})
        }else{
            a.css({'position':'absolute','top':'207px'});
            $("#wrapper").css({'position':'relative','top':'67px'});
            $("#NIE-copyRight").css({'position':'relative','top':'67px'});
        }
    })
});
$(document).ready(function() {
    $(".topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top -70 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});