/**
 * Created by Administrator on 2017/8/1.
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



function switch_img(n) {
    //console.log(count);
    //console.log(n);
    //console.log(switch_n);
    if(Number(n)==n){
        //console.log(n);
        for(var i=0;i<count;i++){
            //其他图片隐藏
            $(".switch a").eq(i).css("z-index","1");
            $(".switch a").eq(i).css("opacity","0");
            $(".sld-btn li").eq(i).removeClass("current");
            //变成白色
            $(".lihover").eq(i).css("visibility","hidden");
            //旋转360度
            $(".lihover").eq(i).css("transform", "rotate(" + 0 + "deg)");
            if(i==n) {
                //这张图片出现
                $(".switch a").eq(n).css("z-index", "2");
                $(".switch a").eq(n).css("opacity", "1");
                $(".sld-btn li").eq(n).addClass("current");
                //变成橘色
                $(".lihover").eq(n).css("visibility", "visible");
                //旋转360度
                $(".lihover").eq(n).css("transform", "rotate(" + 360 + "deg)");
                //setTimeout(function () {
                //switch_n=n+1;
                //},500);
                switch_n=n;
            }
        }
    }
    else {
        if(switch_n==0){
            //这张图片出现
            $(".switch a").eq(switch_n).css("z-index","2");
            $(".switch a").eq(switch_n).css("opacity","1");
            $(".sld-btn li").eq(switch_n).addClass("current");
            //旋转360度
            $(".lihover").eq(switch_n).css("transform","rotate("+360+"deg)");
            //变成橘色
            $(".lihover").eq(switch_n).css("visibility","visible");

            //上一张图片隐藏
            $(".switch a").eq(count-1).css("z-index","1");
            $(".switch a").eq(count-1).css("opacity","0");
            $(".sld-btn li").eq(count-1).removeClass("current");
            //变成白色
            $(".lihover").eq(count-1).css("visibility","hidden");
            //旋转-360度
            $(".lihover").eq(count-1).css("transform","rotate("+0+"deg)");

        }else{
            //这张图片出现
            $(".switch a").eq(switch_n).css("z-index","2");
            $(".switch a").eq(switch_n).css("opacity","1");
            $(".sld-btn li").eq(switch_n).addClass("current");

            $(".lihover").eq(switch_n).css("transform","rotate("+360+"deg)");
            $(".lihover").eq(switch_n).css("visibility","visible");

            //上一张图片隐藏
            $(".switch a").eq(switch_n-1).css("z-index","1");
            $(".switch a").eq(switch_n-1).css("opacity","0");
            $(".sld-btn li").eq(switch_n-1).removeClass("current");

            $(".lihover").eq(switch_n-1).css("visibility","hidden");
            $(".lihover").eq(switch_n-1).css("transform","rotate("+0+"deg)");
        }
        switch_n++;
        if(switch_n>=count){
            switch_n=0;
            //console.log(switch_n);
        }

    }
}