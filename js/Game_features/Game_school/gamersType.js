//门派变换
$(document).ready(function() {
    var currentIndex = 0;
    var length = $('.menPai').length;
    $('.menPai:not(:first)').hide();  //将除了第一张图片隐藏
    $('.li-list:first').children().addClass('tens'); //将第一个slider-item设为激活状态
    $('.li-list').click(function(e) {
        stop();
        var preIndex = $(".li-list").children().filter(".tens").parent().index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    });
    $('.slider-pre').unbind('click');
    $('.slider-pre').bind('click', function() {
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click', function() {
        next();
    });
    /* 向前翻页 */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /*向后翻页*/
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $(".menPai").eq(preIndex).fadeOut(1000).parent().children().eq(currentIndex).fadeIn(500);
        $('.li-list').children().removeClass('tens');
        ($('.li-list').eq(currentIndex)).children().addClass('tens');
    }
});


//角色变换
$("#changeTo").click(function(){
    $(".role>img").fadeToggle();
});


$(".close3").hide();
$(".close2").click(function(){
    $(".slide-sav").addClass("move");
    $(".nav-small").addClass("show");
});
$(".open").click(function(){
    $(".slide-sav").removeClass("move");
    $(".nav-small").removeClass("show");
});
$(".info-btu").click(function(){
    $(".per").addClass("show");
    $(".info-btu").removeClass("show");
    $(".info-btu").css("display","none");
    $(".info-wrap").removeClass("move");
    $(".close3").show();
});
$(".close3").click(function () {
    $(".info-wrap").addClass("move");
    $(".per").removeClass("show");
    $(".info-btu").css("display","block");
    $(".close3").hide();
});
//视频播放
$(".play-btn").click(function() {
    $(".part1-img").css({"display": "none"});
    $(".play-btn").css({"display": "none"});
    $(".videoStart").css("z-index","1001");

    var video=$(".videoStart")
    video.trigger("play");//for auto play
    video.addClass('pause');//for check pause or play add a class
    video.click(function() {
        if ($(this).hasClass('pause')) {
            video.trigger("play");
            $(this).removeClass('pause');
            $(this).addClass('play');
        } else {
            video.trigger("pause");
            $(this).removeClass('play');
            $(this).addClass('pause');
        }
    })
});

$(function () {
    var jn=$(".jn");
    $(".li_img").hover(function () {
        var index=$(this).parent().parent().parent().index();
        jn.eq(index).addClass("class2");
        jn.eq(index).removeClass("class1");
    },function () {
        jn.removeClass("class2");
        jn.addClass("class1");

    });
});

//鼠标移动触发背景移动
function ImgMove(oWrap,add) {
    var iMax=10;
    var aImg=oWrap.getElementsByClassName("Img");
    for(var i=0;i<aImg.length;i++){
        aImg[i].startX=parseInt(getStyle(aImg[i],'left'));
        aImg[i].startY=parseInt(getStyle(aImg[i],'top'));
    }
    oWrap.onmousemove=function(ev){
        ev=ev||window.event;
        //获取鼠标的位置与大盒子中心点位置的距离
        var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2);
        var iY=ev.clientY-(oWrap.offsetTop+this.offsetHeight/2);

        for(var i=0;i<aImg.length;i++){
            if(i==0||i==1){
                add=-add;
            }
            //获取每个img的z-index
            var iZindex=getStyle(aImg[i],'zIndex');
            //Zindex越大移动的相对距离越小
            var iDisL=add*(iX/iMax*(8-iZindex)*0.03);
            var iDisT=add*(iY/iMax*(8-iZindex)*0.04);
            //图片的距离等于原先的距离加上计算的距离
            aImg[i].style.left=aImg[i].startX+iDisL+'px';
            aImg[i].style.top=aImg[i].startY+iDisT+'px';
        }
    };

    function getStyle(obj,attr)
    {
        if( obj.currentStyle){
            return obj.currentStyle[attr];
        }
        return getComputedStyle(obj)[attr];
    }
}
var oWrap1=document.getElementById("menPai1");
var oWrap2=document.getElementById("menPai2");
var oWrap3=document.getElementById("menPai3");
var oWrap4=document.getElementById("menPai4");
var oWrap5=document.getElementById("menPai5");
var oWrap6=document.getElementById("menPai6");
var oWrap7=document.getElementById("menPai7");
var oWrap8=document.getElementById("menPai8");
var oWrap9=document.getElementById("menPai9");
var oWrap10=document.getElementById("menPai10");
var oWrap11=document.getElementById("menPai11");

ImgMove(oWrap1,-1);ImgMove(oWrap2,-1);ImgMove(oWrap3,-1);ImgMove(oWrap4,-1);ImgMove(oWrap5,-1);ImgMove(oWrap6,-1);ImgMove(oWrap7,-1);ImgMove(oWrap8,-1);
ImgMove(oWrap9,-1);ImgMove(oWrap10,-1);ImgMove(oWrap11,-1);