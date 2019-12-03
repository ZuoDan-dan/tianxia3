/**
 * Created by Administrator on 2017/8/18.
 */

var header_height=$("#header").height();
var meetc_height=$("#meet_content").height();
var center_height=header_height+meetc_height;
$("#center").css("height",center_height);
//社交分享图标
var social_timer=null;
$(".share-more").on({
    "mouseover":function () {
        $(".share-more ul").css("display","block");
    },
    "mouseout":function () {
        social_timer=setTimeout(function () {
            $(".share-more ul").css("display","none");
        },1000)
    }
});
$(".share-more ul").on({
    "mouseover":function () {
        clearTimeout(social_timer);
        $(".share-more ul").css("display","block");
    },
    "mouseout":function () {
        $(".share-more ul").css("display","none");
    }});

//点击展开左边的菜单
$(".menu_head").click(function () {
    var THIS=$(this);
    if($(this).next().css("display")=="none"){
        $(this).addClass("current");
        $(this).css("text-align","left!important");
        $(this).next().slideDown(400,'linear',function () {
            THIS.next().css("display","block");
        });
    }else if($(this).next().css("display")=="block"){
        $(this).removeClass("current");
        $(this).next().slideUp(400,'linear',function () {
            THIS.next().css("display","none");
        });
    }
});
setInterval(function () {
    var scroll=$(window).scrollTop();
    if(scroll>500){
        $(".gotop").css("opacity",1);
    }else{
        $(".gotop").css("opacity",0);
    }
},1);
$(".gotop").click(function () {
    $("html,body").animate({scrollTop:0},500);
});


var ml2=$("#content1").width();
$("#content2").css("margin-left",ml2+"px");

var icount=0;
var w=$("#content1 li").width();
var len=$("#content1 li").length;
$(".allpage").html(len);

$(".scrollview-next").click(function () {
    //console.log(icount);
    icount++;
    if(icount>len-1){//大于第十四张
        icount=0;
    }
    $("#content1").css("margin-left",-icount*w+"px");
    $(".nowpage").html(icount+1);
});
$(".scrollview-prev").click(function () {
    //console.log(icount);
    icount--;
    if(icount<0){
        icount=len-1;
    }
    $("#content1").css("margin-left",-(icount)*w+"px");
    $(".nowpage").html(icount+1);
    //console.log(icount);
});

