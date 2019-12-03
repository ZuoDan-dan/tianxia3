/**
 * Created by admin on 2017/7/24.
 */
var curIndex = 0, //当前index
    imgLen = $(".imgList li").length; //图片总数

// 定时器自动变换2.5秒每次
var autoChange = setInterval(function(){
    if(curIndex < imgLen-1){
        curIndex ++;
    }else{
        curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex);
},2500);

//对右下角按钮index进行事件绑定处理等
$(".indexList").find("li").each(function(item){
    $(this).hover(function(){
        clearInterval(autoChange);
         changeTo(item);
         // curIndex = item;
    },function(){
        autoChangeAgain();
    });
});

$("img").mouseover(function(){
    clearInterval(autoChange);
});
$("img").mouseout(function(){
    autoChangeAgain();
});

//清除定时器时候的重置定时器--封装
function autoChangeAgain(){
    autoChange = setInterval(function(){
        if(curIndex < imgLen-1){
            curIndex ++;
        }else{
            curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex);
    },2500);
}

function changeTo(num){
    var goLeft = num * 490;
    $(".imgList").animate({left: "-" + goLeft + "px"},500);
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
}

$(".ulTab .li2").mouseover(function () {
    $(".faqs").show();
    $(".news,.fats").hide();
    $(".li2").css({"color":"#ff7d00","border-bottom":"1px solid #ff7d00"});
    $(".li1,.li3").css({"color":"#ffffff","border":"none"});
});
$(".ulTab .li1").mouseover(function () {
    $(".news").show();
    $(".faqs,.fats").hide();
    $(".li1").css({"color":"#ff7d00","border-bottom":"1px solid #ff7d00"});
    $(".li2,.li3").css({"color":"#ffffff","border":"none"});
});
$(".ulTab .li3").mouseover(function () {
    $(".news,.faqs").hide();
    $(".fats").show();
    $(".li3").css({"color":"#ff7d00","border-bottom":"1px solid #ff7d00"});
    $(".li1,.li2").css({"color":"#ffffff","border":"none"});
});
$("#more,#menu").mouseover(function () {
    $("#menu").show();
});
$("#more,#menu").mouseleave(function () {
    $("#menu").hide();
});