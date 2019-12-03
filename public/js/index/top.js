/**
 * Created by Administrator on 2017/8/18 0018.
 */

//顶部图片移入显示，移出隐藏
$("#NIE-topBar-news").on({
    "mouseover":function () {
        $(".NIE-topBar-abc-s").css("visibility","hidden");
        $(" #NIE-topBar-abc-b").css("display","block");
    },
    "mouseout":function () {
        $(".NIE-topBar-abc-s").css("visibility","visible");
        $(" #NIE-topBar-abc-b").css("display","none");
    }
});

//顶部文字上下轮换
var nav_top1=0;
var nav_top2=110;
setInterval(function () {
    $(".nav-right_ul1").css("top",nav_top1+"px");
    $(".nav-right_ul2").css("top",nav_top2+"px");
    nav_top1-=55;
    nav_top2-=55;
    if(nav_top1==-165){
        $(".nav-right_ul1").fadeOut(500);
        nav_top1=55;
        setTimeout(function () {
            $(".nav-right_ul1").fadeIn(500);
        },2000);
    }else if(nav_top2==-165){
        $(".nav-right_ul2").fadeOut(500);
        nav_top2=55;
        setTimeout(function () {
            $(".nav-right_ul2").fadeIn(500);
        },2000);
    }
},2000);

//移入网易游戏目录，菜单出现
var timer=null;
$(".drn").hover(function () {
    $(".NIE-table").removeClass("hid");
    $(".NIE-table").addClass("extend");
},function () {
    timer=setTimeout(function () {
        $(".NIE-table").removeClass("extend");
        $(".NIE-table").addClass("hid");
    },300);
});
//移入网易游戏目录菜单,菜单不消失，移出消失
$(".NIE-table").hover(function () {
    clearTimeout(timer);
    $(this).removeClass("hid");
    $(this).addClass("extend");
},function () {
    var THIS=$(this);
    setTimeout(function () {
        THIS.removeClass("extend");
        THIS.addClass("hid");
    },300);
});
//点击更多热门手游，展开菜单
var flag=true;
$("#NIE-topBar-more").click(function () {
    if(flag){
        $("#mobi").addClass("mobi");
        $("#hot").addClass("hot");
        $("#news").addClass("news");
        $("#NIE-topBar-more").html(">>");
        $("#NIE-topBar-more").css("height","30px");
        $("#NIE-topBar-more").css("top","169px");
        flag=false;
    }else{
        $("#mobi").removeClass("mobi");
        $("#hot").removeClass("hot");
        $("#news").removeClass("news");
        $("#NIE-topBar-more").html("更多热门手游");
        $("#NIE-topBar-more").css("height","95px");
        $("#NIE-topBar-more").css("top","124px");
        flag=true;
    }
});
