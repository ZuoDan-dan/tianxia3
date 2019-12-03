/**
 * Created by Administrator on 2017/8/8.
 */
//分享图标移入变白
$(".NIE-share-iconBtn li").hover(function () {
    $(this).css("background-color","white");
},function () {
    $(this).css("background-color","#eeeeee")
});
//移入分享更多小图标，出现框
var social_timer=null;
$(".social_bg6").hover(function (e) {
    var social_top=e.clientY;
    var window_height=$(window).height();
    var dt=window_height-social_top;
    if(dt<78){
        $(".NIE-share-more").css("margin-top","-35px");
        $(".NIE-share-more").css("margin-left","-10px");
        $(".NIE-share-more ul").css("display","block");
    }else{
        $(".NIE-share-more").css("top","15px");
        $(".NIE-share-more").css("right","-55px");
        $(".NIE-share-more ul").css("display","block");
    }
},function () {
    social_timer=setTimeout(function () {
        $(".NIE-share-more ul").css("display","none");
    },2000);
});
$(".NIE-share-more").hover(function () {
    clearTimeout(social_timer);
    $(".NIE-share-more ul").css("display","block");
},function () {
    $(".NIE-share-more ul").css("display","none");
});

$(".NIE-share-more ul li").hover(function () {
    $(".NIE-share-more ul li").css("background-color","#f0f0f0");
    $(".NIE-share-more ul li").css("border","1px solid #e0e0e0");
    $(".NIE-share-more ul li").css("border-sizing","content-box");
});
$(function () {
    var e=0;
    var Y2017_Top=$("#year2017").offset().top-e;
    var Y2016_Top=$("#year2016").offset().top-e;
    var  Y2015_Top=$("#year2015").offset().top-e;
    var Y2014_Top=$("#year2014").offset().top-e;
    var Y2013_Top=$("#year2013").offset().top-e;
    var  Y2012_Top=$("#year2012").offset().top-e;
    var  Y2011_Top=$("#year2011").offset().top-e;
    var  Y2010_Top=$("#year2010").offset().top-e;
    var  Y2009_Top=$("#year2009").offset().top-e;
    var   Y2008_Top=$("#year2008").offset().top-e;
    //var t=[Y2017_Top,Y2016_Top,Y2015_Top,Y2014_Top,Y2013_Top,Y2012_Top,Y2011_Top,Y2010_Top,Y2009_Top,Y2008_Top];

    //console.log(t);
    setInterval(function () {
        if($(window).scrollTop()>Y2015_Top && $(window).scrollTop()<Y2014_Top){
            var data=(Y2014_Top-Y2015_Top)/2;
            if($(window).scrollTop()>Y2015_Top && $(window).scrollTop()<(Y2015_Top+data)){
                $("#year2015 .widthAuto .appear").eq(0).addClass("appear-animated");
                $("#year2015 .widthAuto .appear").eq(1).addClass("appear-animated");
            }else{
                $("#year2015 .widthAuto .appear").eq(2).addClass("appear-animated");
            }
            //console.log(2015);
        }else if($(window).scrollTop()>Y2014_Top && $(window).scrollTop()<Y2013_Top){
            $("#year2014 .widthAuto .appear").addClass("appear-animated");
            //console.log(2014);
        }
        else if($(window).scrollTop()>Y2013_Top && $(window).scrollTop()<Y2012_Top){
            $("#year2013 .widthAuto .appear").addClass("appear-animated");
           // console.log(2013);
        }
        else if($(window).scrollTop()>Y2012_Top && $(window).scrollTop()<Y2011_Top){
            $("#year2012 .widthAuto .appear").addClass("appear-animated");
            //console.log(2012);
        }
        else if($(window).scrollTop()>Y2011_Top && $(window).scrollTop()<Y2010_Top){
            $("#year2011 .widthAuto .appear").addClass("appear-animated");
            //console.log(2011);
        }
        else if($(window).scrollTop()>Y2010_Top && $(window).scrollTop()<Y2009_Top){
            $("#year2010 .widthAuto .appear").addClass("appear-animated");
            //console.log(2010);
        }
        else if($(window).scrollTop()>Y2009_Top && $(window).scrollTop()<Y2008_Top){
            var datas=(Y2008_Top-Y2009_Top)/2;
            if($(window).scrollTop()>Y2009_Top && $(window).scrollTop()<(Y2009_Top+datas)){
                $("#year2009 .widthAuto .appear").eq(0).addClass("appear-animated");
                $("#year2009 .widthAuto .appear").eq(1).addClass("appear-animated");
            }else{
                $("#year2009 .widthAuto .appear").eq(2).addClass("appear-animated");
            }
            //console.log(2009);
        }
        else if($(window).scrollTop()>Y2008_Top){
            $("#year2008 .widthAuto .appear").addClass("appear-animated");
            //console.log(2008);
        }
    },1);

});



