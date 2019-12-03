/**
 * Created by Administrator on 2017/7/31.
 */


//图片轮换
var count=$(".switch a").length;
var sld_timer=null;
var switch_n=1;
sld_timer=setInterval(switch_img,1500);
$(".sld-btn li").mouseover(function () {
    var index=$(this).index();
    switch_img(index);
});
//分享图标移入变红
$(".NIE-share-iconBtn li").hover(function () {
    $(this).css("background-color","darkred");
},function () {
    $(this).css("background-color","white")
});
//移入分享更多小图标，出现框
var social_timer=null;
$(".social_bg6").hover(function (e) {
    $(".NIE-share-more").css("display","block");
    var social_top=e.clientY;
    var window_height=$(window).height();
    var dt=window_height-social_top;
    if(dt<78){
        $(".NIE-share-more").css("margin-top","-45px");
        $(".NIE-share-more").css("margin-left","-10px");
    }else{
        $(".NIE-share-more").css("top","40px");
        $(".NIE-share-more").css("left","0px");
    }
    console.log(dt);
},function () {
    social_timer=setTimeout(function () {
        $(".NIE-share-more").css("display","none");
    },2000);
});
$(".NIE-share-more").hover(function () {
    clearTimeout(social_timer);
    $(".NIE-share-more").css("display","block");
},function () {
    setTimeout(function () {
        $(".NIE-share-more").css("display","none");
    },1000);
});

//移入分享更多小图标后出现的框的内容
$(".NIE-share-more ul li a.iconfont1").hover(function () {
    $(this).css("background-color","#f0f0f0");
    $(this).css("border","1px solid #e0e0e0");
},function () {
    $(this).css("background-color","#fff");
    $(this).css("border-color","#fff");
});

//鼠标移入音乐图片旋转
$(".section1 .g-clr li a").hover(function () {
    $(this).parent().find("img").css("transition",10+"s linear");
    $(this).parent().find("img").css("transform",'rotate('+360+'deg)');
},function () {
    $(this).parent().find("img").css("transition",0.3+"s linear");
    $(this).parent().find("img").css("transform",'rotate('+0+'deg)');
});
//鼠标移入，音乐图片透明度变为1
$(".section2 .play").hover(
    function () {
        $(this).parent().find("img").css("opacity",1);
    },
    function () {
        $(this).parent().find("img").css("opacity",0.5);
    }
);
//点击向后翻图片
var ul_left=0;
var dis=163;
$(".section2 .next").click(function () {
    ul_left-=dis;
    if(ul_left<=-(dis*11)){
        ul_left=0;
    }
    $(".section2 .g-clr").css("left",ul_left);
});
//点击向前翻图片
$(".section2 .prev").click(function () {
    ul_left+=dis;
    if(ul_left>=0){
        ul_left=-(dis*10);
    }
    $(".section2 .g-clr").css("left",ul_left);
});

$("#mlist li").click(function () {
    //console.log($(this).index());
    for(var i=0;i<$("#mlist li").length;i++){
        if(i!=$(this).index()){
            $(".g-clr audio")[i].pause();
        }
    }
    // var audio=$("audio");
    // for(var i=0;i<audio.length;i++){
    //      audio[i].pause();
    //     }
    if( $(this).find("audio")[0].paused){
        $(this).find("audio")[0].play();
        $("#mlist li .share-tt").css("color","#f88d2e");
        $(this).find(".share-tt").css("color","white");
    }else if($(this).find("audio")[0].played){
        $(this).find("audio")[0].pause();
        $(this).find(".share-tt").css("color","#f88d2e");
    }
});

$(".song_list1 li").click(function () {
    //console.log($(this).index());
    for(var i=0;i<$(".song_list1 li").length;i++){
       if(i!=$(this).index()){
           $(".song_list1 audio")[i].pause();
       }
    }
    if($(this).find("audio")[0].paused){
        $(this).find("audio")[0].play();
    }else if($(this).find("audio")[0].played){
        $(this).find("audio")[0].pause();
    }
});

$(".song_list2 li").click(function () {
    //console.log($(this).index());
    for(var i=0;i<$(".song_list2 li").length;i++){
        if(i!=$(this).index()){
            $(".song_list2 audio")[i].pause();
        }
    }
    if($(this).find("audio")[0].paused){
        $(this).find("audio")[0].play();
        //$(this).find(".u-link").css("color","#f88d2e!important");
    }else if($(this).find("audio")[0].played){
        $(this).find("audio")[0].pause();
        //$(this).find(".u-link").css("color","#ababab");
    }
});