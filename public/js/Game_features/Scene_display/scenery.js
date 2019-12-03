/**
 * Created by Administrator on 2017/8/22 0022.
 */

$(function () {
    /*主层背景的轮播*/
    var currentIndex=0;
    var hasStart=false;
    var length=$(".pic-li li").length;
    $(".pic-li li:not(:first)").hide();
    function start() {
        if(!hasStart){
            hasStart=true;
            setInterval(next,4000);
        }
    }
    function next() {
        var preIndex=currentIndex;
        currentIndex=++currentIndex%length;
        toPlay(preIndex,currentIndex);
    }
    function toPlay(preIndex,currentIndex) {
        $(".pic-li li").eq(currentIndex).addClass("pic");
        $(".pic-li li").eq(preIndex).fadeOut(1000);
        $(".pic-li li").eq(currentIndex).fadeIn(1000);

    }
    start();
});

/*图片层的轮播*/
var length=$(".warp li").length;  //图片和层li的数量
var uWidth=$("#slideWrap").find("ul").width();  //图片层lul的总宽
var liWidth=$("#listBox").find("ul").find("li").eq(0).width();//首页层li的宽
var WliWidth=$("#slideWrap").find("ul").find("li").eq(0).width(); //图片层li的宽
var currentIndex;
$(".listBox li").click(function () {
    setTimeout(function () {
        $(".pic-pop").fadeIn(500);
    },600);
    currentIndex = $(this).index();
    console.log(currentIndex);
    $(this).addClass('toBig').siblings().removeClass();
    $("#listBox").find("ul").animate({'left': -((currentIndex-2)*liWidth)}, 500);
    uWidth=length*WliWidth;
    $(".warp").css({'width':uWidth,'left':-(currentIndex*WliWidth)+960+'px'});
});
$(".next").click(function(){
    if(!$(".warp").is(":animated")){
        $(".warp").animate({'left':'-=1920px'},function(){
        });
    }
});
$(".prev").click(function(){
    if(!$(".warp").is(":animated")){
        $(".warp").animate({'left':'+=1920px'},function(){
        });
    }
});
/*鼠标移动改变图片宽度*/
$(".handle").mousedown(function(e){
    //设置移动后的默认位置
    var endx=0;
    var endy=0;
    //获取div的初始位置，要注意的是需要转整型，因为获取到值带px
    var left= parseInt($(".handle").css("left"));
    var top = parseInt($(".handle").css("top"));

    //获取鼠标按下时的坐标，区别于下面的es.pageX,es.pageY
    var downx=e.pageX;
    var downy=e.pageY;     //pageY的y要大写，必须大写！！

    //    鼠标按下时给div挂事件
    $(".warp").bind("mousemove",function(es){
        var endx= es.pageX-downx+left;     //计算div的最终位置
        var endy=es.pageY-downy+top;
        if(endx<=400||endx>=1425){
            return false
        }
        //es.pageX,es.pageY:获取鼠标移动后的坐标
        //带上单位
        $(".handle").css("left",endx+"px").css("top",endy+"px")
        $(".change").css("width",endx+45+"px");
        $(".change-txt").css("left",endx+55+"px");

    });
});
$(".handle").mouseup(function(){
    //鼠标弹起时给div取消事件
    $(".warp").unbind("mousemove")
});

/*图片层的移入移出。显示隐藏事件*/
$(".shareTop").hover(function () {
    $('.scrrenhot').removeClass("tohide");
},function () {
    $('.scrrenhot').addClass("tohide");
});

/*分享框的移入移出*/
var timer;
$("#share").hover(function () {
    $('.NIE-share-more ul').css("display", "block");
}, function () {
    timer = setTimeout(function () {
        $('.NIE-share-more ul').css("display", "none");
    }, 500)
});
$('.NIE-share-more ul').hover(function () {
    if ($('.NIE-share-more ul').css("display", "block")) {
        clearTimeout(timer);
        $('.NIE-share-more ul').css("display", "block");
    }
}, function () {
    setTimeout(function () {
        $('.NIE-share-more ul').css("display", "none");
    }, 500);
});

//点击关闭图片层
$("#JpopClose").click(function () {
    $(".pic-pop").fadeOut(500);
})
//点击全屏事件
var fullscreen=function(){
    $('#JfullScreen').hide();
    $(".exitfullScreen-btn").show();
    elem=document.body;
    if(elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen();
    }else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }else if(elem.requestFullScreen){
        elem.requestFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用
    }
};
//关闭全屏
var exitfullscreen=function(){
    $('#JfullScreen').show();
    $(".exitfullScreen-btn").hide();
    var elem=document;
    if(elem.webkitCancelFullScreen){
        elem.webkitCancelFullScreen();
    }else if(elem.mozCancelFullScreen){
        elem.mozCancelFullScreen();
    }else if(elem.cancelFullScreen){
        elem.cancelFullScreen();
    }else if(elem.exitFullscreen){
        elem.exitFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用
    }
};

//导航层
$("#Jnav").hover(function () {
    $("#Jnav").addClass("show");
},function () {
    $("#Jnav").removeClass("show");
    $(".nav-btn").show();
});

$(".nav-btn").mouseover(function () {
    $("#Jnav").addClass("show");
    $(".nav-btn").hide();
});


