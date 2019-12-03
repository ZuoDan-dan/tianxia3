/**
 * Created by Administrator on 2017/8/8 0008.
 */

$(document).ready(function () {
    $("#Jnav").addClass("show");
});
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

//鼠标移动触发背景移动
var oWrap=document.getElementById("wrap-main");
var aImg=document.getElementsByClassName("cloud");
var iMax=4;
//获取图片的初始位置
for(var i=0;i<aImg.length;i++){
    aImg[i].startX=parseInt(getStyle(aImg[i],'left'))
}
oWrap.onmousemove=function(ev){
        ev=ev||window.event;
        //获取鼠标的位置与大盒子中心点位置的距离
        var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2);
    setTimeout(function () {
        for(var i=0;i<aImg.length;i++){
            //获取每个img的z-index
            var iZindex=getStyle(aImg[i],'zIndex');
            //Zindex越大移动的相对距离越小
            var iDisL=-iX/iMax*(iMax-iZindex)*0.06;
            //图片的距离等于原先的距离加上计算的距离
            aImg[i].style.left=aImg[i].startX+iDisL+'px'
        }
    },200);
    };

function getStyle(obj,attr)
{
    if( obj.currentStyle){
        return obj.currentStyle[attr];
    }
    return getComputedStyle(obj)[attr];
}
