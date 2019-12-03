/**
 * Created by Administrator on 2017/7/31.
 */

//移入显示游戏首页菜单
$(".nava").mouseover(function () {
    var index=$(".nava").index(this)+1;
    $(".next_menu_box"+index).css("visibility","visible");
    $(".nava"+index).css("line-height","115px");
    $("#navs"+index).removeClass("navs"+index);
    $("#navs"+index).addClass("navs"+index+"_hover");
    $(".nava"+index).css("background-image","url('../../../public/images/index/nav_bg_rep.png')");
});
$(".nava").mouseleave(function () {
    var index=$(".nava").index(this)+1;
    $(".next_menu_box"+index).css("visibility","hidden");
    $(".nava"+index).css("line-height","135px");
    $(".nava"+index).css("background-image","");
    $("#navs"+index).addClass("navs"+index);
    $("#navs"+index).removeClass("navs"+index+"_hover");
});

$(".next_menu_box").hover(function () {
    var index=$(".next_menu_box").index(this)+1;
    $(".next_menu_box"+index).css("visibility","visible");
    $(".nava"+index).css("line-height","115px");
    $("#navs"+index).removeClass("navs"+index);
    $("#navs"+index).addClass("navs"+index+"_hover");
    $(".nava"+index).css("background-image","url('../../../public/images/index/nav_bg_rep.png')");
},function () {
    var index=$(".next_menu_box").index(this)+1;
    $(".next_menu_box"+index).css("visibility","hidden");
    $(".nava"+index).css("line-height","135px");
    $(".nava"+index).css("background-image","");
    $("#navs"+index).addClass("navs"+index);
    $("#navs"+index).removeClass("navs"+index+"_hover");
});

//变成橘色的字
$(".navsa").hover(function () {
    var index=$(".navsa").index(this)+1;
    $("#navsas"+index).addClass("navsas"+index);
},function () {
    var index=$(".navsa").index(this)+1;
    $("#navsas"+index).removeClass("navsas"+index);
});
//top_bar位于中间
var top_bar_left=($(document).width()-1200)/2;
$(".top_bar").css("left",top_bar_left+"px");


//夫妻纪念滚动
var timer_scroll=null;
var num=0;
timer_scroll=setInterval(function () {
    $(".scroll").css("left",num);
    num-=1;
    if(num==-1392){
        num=0;
    }
},80);
$("#scroll_wrap").mouseover(function () {
    clearInterval(timer_scroll);
});
$("#scroll_wrap").mouseout(function () {
    timer_scroll=setInterval(function () {
        $(".scroll").css("left",num);
        num-=1;
    },80);
});



//鼠标移入字变大，变成橘色，随后消失
$(".link").hover(function () {
        var index=$(this).index()+1;
        $(this).find(".ahover").css("opacity",0.7);
        $(this).find(".ahover").css("visibility","visible");
        $(this).find(".ahover").css("transform","scale("+1.4+")");
        $(this).find(".ahover").prev().css("transform","scale("+1.1+")");
        $(this).find(".ahover").fadeIn();
        var this_ahover=$(this).find(".ahover");
        setTimeout(function () {
            this_ahover.css("transform","scale("+1+")");
            this_ahover.prev().css("transform","scale("+1+")");
            this_ahover.css("opacity",1);
            this_ahover.prev().css("opacity",0)
        },100);
    },
    function () {
        $(this).find(".ahover").css("opacity",0.7);
        $(this).find(".ahover").prev().css("opacity",1);
        $(this).find(".ahover").css("visibility","visible");
        $(this).find(".ahover").css("transform","scale("+1.4+")");
        $(this).find(".ahover").prev().css("transform","scale("+1.1+")");
        $(this).find(".ahover").fadeIn();
        var this_ahover=$(this).find(".ahover");
        setTimeout(function () {
            this_ahover.css("opacity",0);
            this_ahover.css("visibility","hidden");
            this_ahover.css("transform","scale("+1+")");
            this_ahover.prev().css("transform","scale("+1+")");
            this_ahover.prev().css("opacity",1);
        },100);
    });

//图片轮换
var switch_timer=null;
var switch_n=1;
var count=$(".switch a").length;

switch_timer=setInterval(switch_img,2500);

$("#switch a").mouseover(function () {
    clearInterval(switch_timer);
    switch_n=$(this).index();
    // console.log(switch_n);
    switch_img(switch_n);
});

$("#switch a").mouseout(function () {
    switch_timer=setInterval(switch_img,2500);
});

$(".switch-btn li").mouseover(function () {
    clearInterval(switch_timer);
    switch_n=$(this).index();
    // console.log(switch_n);
    switch_img(switch_n);
});
$(".switch-btn li").mouseout(function () {
    switch_timer=setInterval(switch_img,2500);
});



//左右滚动的菜单
$(".tab").hover(function () {
        //鼠标移入，本身字变白，边框底部变白，其他保持原样
        $(".ahover").css("visibility","hidden");
        $(".tab").css("border-bottom","none" );

        $(this).find(".ahover").css("visibility","visible");
        $(this).css("border-bottom","1px solid #e1e1e1" );
    }
);
//鼠标移入标题，内容滚动
$(".news-tab li").hover(function () {
    var index=$(this).index();
    //console.log(index);
    $(".news-tabcon").css("margin-left",-index*284+"px")
});
//获奖公示
var rew_top1=0;
var rew_top2=220;
var rew_timer=null;
rew_timer=setInterval(function () {
    $(".rew-in .rew-in_ul1").css("top",rew_top1+"px");
    $(".rew-in .rew-in_ul2").css("top",rew_top2+"px");
    rew_top1-=44;
    rew_top2-=44;
    if(rew_top1===(-264)){
        $(".rew-in .rew-in_ul1").css("display","none");
        rew_top1=176;
        setTimeout(function () {
            $(".rew-in .rew-in_ul1").css("display","block");
        },1500);
    }else if(rew_top2===(-264)){
        $(".rew-in .rew-in_ul2").css("display","none");
        rew_top2=176;
        setTimeout(function () {
            $(".rew-in .rew-in_ul2").css("display","block");
        },1500);
    }
},1500);
//天下纪年
var jinian_list_top=0;
setInterval(function () {
    $(".jinian_list").css("top",jinian_list_top+"px");
    jinian_list_top-=1;
    if(jinian_list_top==-360){
        jinian_list_top=0;
    }
},20);

//职业名字奇偶数列排布
$(".jobs-tab").find(".name:even").css("top",10+"px");
$(".jobs-tab").find(".name:odd").css("bottom",10+"px");

$(".job_tab").hover(function () {
    //移入，自身的框出现,其他框消失
    $(".job_tab").find(".ahover").css("opacity","0");
    $(this).find(".ahover").css("opacity",1);

    var index=$(this).parent().index();
    //其他的向两边隐藏
    $(".jobs-con").find(".exp").css("transform","translate("+-100+"px,"+0+")");
    $(".jobs-con").find(".form").css("transform","translate("+-100+"px,"+0+")");
    $(".jobs-con").find(".figure").css("transform","translate("+250+"px,"+0+")");

    $(".jobs-con").css("visibility","hidden");
    $(".jobs-con").css("opacity","0");
    //选中的在中间出现
    $(".jobs-con").eq(index).find(".exp").css("transform","translate("+0+","+0+")");
    $(".jobs-con").eq(index).find(".form").css("transform","translate("+0+","+0+")");
    $(".jobs-con").eq(index).find(".figure").css("transform","translate("+0+","+0+")");

    $(".jobs-con").eq(index).css("visibility","visible");
    $(".jobs-con").eq(index).css("opacity","1");
});

//鼠标移上去，图片放大
$(".main_2_right ul li img").hover(function () {
    $(this).addClass("scale");
},function () {
    $(this).removeClass("scale");
});

//小图标变黄
$(".task_head .more").hover(function () {
    $(this).find(".ahover").css("visibility","visible");
    $(this).find(".ahover").css("opacity",1);
},function () {
    $(this).find(".ahover").css("visibility","hidden");
    $(this).find(".ahover").css("opacity",0);
});

$(".hot-btn").hover(function(){
    $(this).find(".span").css("opacity",0);
    $(this).find(".ahover").css("opacity",1);
},function () {
    $(this).find(".span").css("opacity",1);
    $(this).find(".ahover").css("opacity",0);
});

$(".box-hot_head .more").hover(function () {
    $(this).find(".span").css("opacity",0);
    $(this).find(".ahover").css("opacity",1);
},function () {
    $(this).find(".span").css("opacity",1);
    $(this).find(".ahover").css("opacity",0);
});

$(".pic_item").hover(function(){
    $(this).find("img").addClass("scale_1");
    $(this).find("span").css("color","#ff7219");
},function () {
    $(this).find("img").removeClass("scale_1");
    $(this).find("span").css("color","#565656");
});
//小图标变黄
$(".method_head span").hover(function () {
    $(".method_head .ahover").css("opacity","1");
},function () {
    $(".method_head .ahover").css("opacity","0");
});
//扫码
$(".box-sociality ul li a").hover(function () {
    $(this).find(".ahover").css("opacity","1");
    $(this).find(".ewm-bg").css("opacity","0");
    $(this).find("img").css("top",-100+"px");
    $(this).find("img").css("visibility","visible");
},function () {
    $(this).find(".ahover").css("opacity","0");
    $(this).find(".ewm-bg").css("opacity","1");
    $(this).find("img").css("top",10+"px");
    $(this).find("img").css("visibility","hidden");
});
//同人区文字变黄
$(".tongren-btns a").hover(function () {
    $(this).find("span").css("opacity","0");
    //$(this).find("span").css("visibility","hidden");
    $(this).find(".ahover").css("opacity","1");
},function () {
    $(this).find("span").css("opacity","1");
    $(this).find(".ahover").css("opacity","0");
});
//同人区图片缩放
$(".tongren_pics ul li a").hover(function(){
    $(this).find("img").addClass("scale_1");
},function(){
    $(this).find("img").removeClass("scale_1");
});

var m_flag=true;
$(".songs .song-list a").on({
    "click":function () {
        // $(".songs .song-list a").find("em").css("display","block");
        // $(".songs .song-list a").find("i").css("display","none");
        // $(this).find("em").css("display","none");
        // $(this).find("i").css("display","block");
        $(".songs .song-list a").removeClass("m_active");
        $(this).addClass("m_active");
        //音乐
        //激活
        $(".songs .song-list a").removeClass("m_active");
        $(this).addClass("m_active");
        for(var i=0;i<$(".songs .song-list audio").length;i++){
            if(i!=$(this).index()){
                $(".songs .song-list audio")[i].pause();
            }
        }
        var player=$(this).find("audio")[0];
        if(player.paused){
            player.play();
            m_flag=false;
            $(".pause").addClass("play");
        }else if(player.played){
            player.pause();
            m_flag=true;
            $(".pause").removeClass("play");
        }
    }
});
//下一曲
// $(".next").click(function () {
//     var cur;
//     $(".songs .song-list .m_active audio")[0].pause();//当前暂停
//     //$(".songs .song-list .m_active").next().addClass("m_active");//下一个激活
//     $(".songs .song-list .m_active").next().find("audio")[0].play();//下一个播放
//     $(".songs .song-list .m_active").removeClass("m_active");
//
// });

$(".main_5_img li").hover(function(){
    $(this).find("img").addClass("scale");
},function () {
    $(this).find("img").removeClass("scale");
});

var share_timer=null;
$(".share_morebtn").hover(function () {
    $(".share-more").css("display","block");
},function () {
    share_timer=setTimeout(function () {
        $(".share-more").css("display","none");
    },1500);
});
$(".share-more").hover(function () {
    clearTimeout(share_timer);
},function () {
    $(this).css("display","none");
});

$(".share-more ul li").hover(function(){
    $(this).css({
        border:1+"px solid #E0E0E0",
        backgroundColor : '#F0F0F0'
    })
},function () {
    $(this).css({
        border:"none",
        backgroundColor :''
    })
});

//音乐,暂停键点击
$(".pause").click(function () {
    if(m_flag){
        $(".pause").addClass("play");
        //$(".news_link audio").attr("autoPlay","autoPlay");
        var player1=$(".songs .song-list .m_active audio")[0];
        if (player1.paused){ /*如果已经暂停*/
            player1.play(); /*播放*/
        }
        m_flag=false;
    }else{
        $(".pause").removeClass("play");
        var player2=$(".songs .song-list .m_active audio")[0];
        if (player2.played){
            player2.pause();
        }
        m_flag=true;
    }

});
