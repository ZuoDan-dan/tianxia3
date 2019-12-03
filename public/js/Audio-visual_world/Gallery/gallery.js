/**
 * Created by Administrator on 2017/8/5.
 */
//登录后，显示用户信息
$(".user-name").hover(function () {
    $(".user-more").css("display","block");
},function () {
    $(".user-more").css("display","none");
});

//图片轮换
var black_wid=($(window).width()-1000)/2;//每个黑色框的宽度
var opic1left=1000-black_wid;//第一个ul初始居左的距离
var opic2Left=7000-(3000+black_wid);//第二个ul初始居左的距离
//两边黑色阴影部分
$(".mask").css("width",black_wid);//宽度
$(".mask2").css("left",1000+black_wid+"px");//居左的距离

$(".pics_list1").css("left",-opic1left);
var count=0;
var pic1left=opic1left;

$(".scRight").click(function () {
    clearInterval(timer);
    count=count+1;
    if(count>3){
        count=0;
    }
    pic1left=opic1left;
    pic1left+=count*1000;
    $(".pics_list1").css("left",-pic1left);
    $(".picsBtns img").removeClass("on");
    $(".picsBtns img").eq(count).addClass("on");
    timer=setInterval(slidPics,2000);
});
$(".scLeft").click(function () {
    clearInterval(timer);
    count=count-1;
    if(count<0){
        count=3;
    }
    pic1left=opic1left;
    pic1left+=count*1000;
    $(".pics_list1").css("left",-pic1left);
    $(".picsBtns img").removeClass("on");
    $(".picsBtns img").eq(count).addClass("on");
    timer=setInterval(slidPics,2000);
});

function slidPics() {
    //console.log("aaa");
    if(count>=4){
        count=0;
        pic1left=opic1left;
        pic1left+=count*1000;
    }else{
        pic1left=opic1left;
        pic1left+=count*1000;
    }
    $(".pics_list1").css("left",-pic1left);
    $(".picsBtns img").removeClass("on");
    $(".picsBtns img").eq(count).addClass("on");
    count++;
}

var timer=setInterval(slidPics,2000);
$(".picsBtns a").click(function () {
    clearInterval(timer);
    count=$(this).index();

    pic1left=opic1left;
    pic1left+=count*1000;
    $(".pics_list1").css("left",-pic1left);
    $(".picsBtns img").removeClass("on");
    $(".picsBtns img").eq(count).addClass("on");
    timer=setInterval(slidPics,2000);
});



//武器外观展示
for(var i=0;i< $(".dHots .clr span").length;i++){
    $(".dHots .clr span").eq(i).hover(function () {
        var index=$(this).index();
        $(".dHots .clr span").removeClass("current");
        $(this).addClass("current");
        $(".show").find("ul").removeClass("current");
        $(".show").find("ul").eq(index).addClass("current");
    });
}

//监听滚动条，浮标出现
setInterval(function () {
    var W_scrollTop=$(window).scrollTop();
    if(W_scrollTop>500){
        $(".dFloat").css("opacity",1);
        $(".dFloat").css("display","block");
    }else{
        $(".dFloat").css("opacity",0);
        $(".dFloat").css("display","none");
    }
    if(W_scrollTop>556&&W_scrollTop<858){
         $(".right-nav1").css("background-position","-42px 0");
    }else{
        $(".right-nav1").css("background-position","0 0");
    }
    if(W_scrollTop>858&&W_scrollTop<1401){
        $(".right-nav2").css("background-position","-42px -47px");
    }else{
        $(".right-nav2").css("background-position","0 -47px");
    }
    if(W_scrollTop>1401&&W_scrollTop<1916){
        $(".right-nav3").css("background-position","-42px -94px");
    }else{
        $(".right-nav3").css("background-position","0 -94px");
    }
    if(W_scrollTop>1916&&W_scrollTop<2225){
        $(".right-nav4").css("background-position","-42px -141px");
    }else{
        $(".right-nav4").css("background-position","0 -141px");
    }
    if(W_scrollTop>2225){
        $(".right-nav5").css("background-position","-42px -189px");
    }else{
        $(".right-nav5").css("background-position","0 -189px");
    }
},1);

//一周精选 586 玩家真人秀888 精美截图1451 天下画廊1966 壁纸下载2275
$(".right-nav1").click(function () {
    //1000是ms,也可以用slow代替。
    $("html,body").animate({scrollTop:586},1000);
});
$(".right-nav2").click(function () {
    //1000是ms,也可以用slow代替。
    $("html,body").animate({scrollTop:888},1000);
});
$(".right-nav3").click(function () {
    //1000是ms,也可以用slow代替。
    $("html,body").animate({scrollTop:1451},1000);
});
$(".right-nav4").click(function () {
    //1000是ms,也可以用slow代替。
    $("html,body").animate({scrollTop:1966},1000);
});
$(".right-nav5").click(function () {
    //1000是ms,也可以用slow代替。
    $("html,body").animate({scrollTop:2275},500);
});

//退出登录
$.post("/loginout",function (data) {
    if(data==1){
        window.location.reload();
    }else{
        alert("网络连接失败，请稍后再试");
    }
});