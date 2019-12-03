/**
 * Created by admin on 2017/7/17.
 */
$("#more,#menu").mouseover(function () {
    $("#menu").show();
});
$("#more,#menu").mouseleave(function () {
    $("#menu").hide();
});

$("#closeSilder").click(function() {
    $("#rSilder").hide();
});
$(function(){
    var a = $("#rSilder"),
        b =a.offset();
    $(document).on('scroll',function(){
        var c = $(document).scrollTop();
        if(c>b.top){
            a.css({'position':'fixed','top':'100px'})
         }else{
            a.css({'position':'absolute','top':'600px'})
         }
     })
 });
$("#goTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, '0');
});
$(".li1").click(function(){
    $("#intro-part1").fadeOut(1000).fadeIn(1000);
});
$(".li2").click(function(){
    $("#intro-part2").fadeOut(1000).fadeIn(1000);
});
$(".li3").click(function(){
    $("#intro-part3").fadeOut(1000).fadeIn(1000);
});
$(".li4").click(function(){
    $("#intro-part4").fadeOut(1000).fadeIn(1000);
});
$(".li5").click(function(){
    $("#intro-part5").fadeOut(1000).fadeIn(1000);
});
$(".li6").click(function(){
    $("#intro-part6").fadeOut(1000).fadeIn(1000);
});
$(".li7").click(function(){
    $("#intro-part7").fadeOut(1000).fadeIn(1000);
});