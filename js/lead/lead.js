/**
 * Created by Administrator on 2017/7/22 0022.
 */
$(function(){
    $(window).scroll(function(){
        var a=$(this).scrollTop();
        if(a>140){
            $("#box1").addClass("web-new");
            $("#box1").css({'visibility':'visible','opacity':'1'});
        }
        if(a>550){
            $("#box2").addClass("web-new");
            $("#box2").css({'visibility':'visible','opacity':'1'});
        }
        if(a>980){
            $("#box3").addClass("web-new");
            $("#box3").css({'visibility':'visible','opacity':'1'});
        }
        if(a>1220){
            $("#box4").addClass("web-new");
            $("#box4").css({'visibility':'visible','opacity':'1'});
        }
    });


    var length,
        currentIndex=0,
        interval,
        hasStarted=false,
        t=2000;
    length=$(".mpBd_panel").length;
    $(".mpBd_panel:not(:first)").hide();
    $(".mpHd_item:first").addClass("active");
    $(".mpBd_panel").hover(function(){
        stop();
    },function () {
        start();
    });
    $(".mpHd_item").hover(function () {
        stop();
        var preIndex=$(".mpHd_item").filter(".active").index();
        currentIndex=$(this).index();
        played(preIndex,currentIndex);
    },function(){
        start();
    });
    function next(){
        var preIndex=currentIndex;
        currentIndex=++currentIndex%length;
        played(preIndex,currentIndex);}

    function played(preIndex,currentIndex) {
        $(".mpBd_panel").eq(preIndex).fadeOut(1000).parent().children().eq(currentIndex).fadeIn(500);
        $(".mpHd_item").removeClass("active");
        $(".mpHd_item").eq(currentIndex).addClass("active");
    }
    function start() {
        if(!hasStarted){
            hasStarted=true;
            interval=setInterval(next,t);
        }
    }
    function stop() {
        clearInterval(interval);
        hasStarted=false;
    }
    start();


    function playing(wrapId,aBox,TIME){
        var _now=0;
        var _now2=0;
        var numLi=wrapId.find("ol").find("li");
        var len=numLi.length;
        var Box=wrapId.find(aBox);
        var aliWidth=wrapId.find("ul").find("li").eq(0).width();
        //这个是控制图片运动距离的计数器
        numLi.mouseover(function(){
            var index = $(this).index();
            _now = index;
            _now2=index;
            $(this).addClass('current').siblings().removeClass();
            wrapId.find("ul").animate({'left':-(aliWidth*index)},500);
        });
        function slider(){
            var ali=wrapId.find("ul").find("li");
            if(_now==numLi.size()-1){
                ali.eq(0).css({
                    'position':'relative',
                    'left': wrapId.find("ul").width()
                });
                _now=0;
            }else{
                _now++;
            }
            _now2++;
            numLi.eq(_now).addClass('current').siblings().removeClass();
            wrapId.find("ul").animate({'left':-(aliWidth*_now2)},500,function(){
                if(_now==0){
                    ali.eq(0).css('position','static');
                    wrapId.find("ul").css('left',0);
                    _now2=0;
                }
            });
        }
        var timeId = setInterval(slider,TIME);
        wrapId.hover(function(){
            clearInterval(timeId);
        },function(){
            timeId = setInterval(slider,TIME);
        });
    }
    playing($('#wrap'),'#aa',2500);
    playing($('#WrapPics0'),'#wrapList0',2500);
    playing($('#WrapPics1'),'#wrapList1',2500);
    playing($("#WrapPics2"),'#wrapList2',2500);
    playing($("#WrapPics3"),'#wrapList3',2500);
    playing($("#WrapPics4"),'#wrapList4',2500);
    playing($("#WrapPics5"),'#wrapList5',2500);
    playing($("#WrapPics6"),'#wrapList6',2500);
    playing($("#WrapPics7"),'#wrapList7',2500);


    $(".newBox").css("display","none");
    $(".newBox").eq(0).css("display","block");
    $(".newWHd a").eq(0).addClass("on");
    $(".newWHd a").hover(function(){
        var i=$(this).index();
        $(".newWHd a:not(:eq(i))").removeClass("on");
        $(".newWHd a").eq(i).addClass("on");
        $(".newBox").css("display","none");
        $(".newBox").eq(i).css("display","block");

    });

});

/*视频层*/
$(function(){
    var video=$("#myPlayer");
    $(".video-play").click(function(){
        $(".Layer").css({"display":"block"});
    });
    $(".close").click(function(){
        $(".video-pop").css({"display":"none"});
        $(".Layer").css({"display":"none"});
        video.removeAttr(autoplay="yes");
    });
    if (video.canPlayType) {
        video.click( function play(e){
            if(video.paused){//如果视频是暂停的，设置为播放
                video.play();
            }else{
                video.pause();
            }
        });
    }
});


var flag=false;

//失焦事件，判断账号是否为null，再判断账号是否存在，判断新账号是否满足要求
var reg1=/^([a-z]|[A-Z])[0-9a-zA-Z]{5,15}(@163.com|@126.com|@yeah.net|@Vip.163.com|@Vip.126.com)$/;     //以字母开头
var reg2=/^[1-9]\d{10}@163.com$/;              //电话号码
var reg3=/^[1-9]\d{4,10}@qq.com$/;      //qq邮箱
var reg4=/\S{6,16}/;
var reg5=/^\d{6,16}$/;

$("#email").blur(function () {
    var info=$("#email").val();
    //console.log(info);
    if($("#email").val()==""){
        $(".tips").css("display","block");
        $(".tips").html("账号不能为空");
        flag=false;
    }else if(reg3.test(info)||reg1.test(info)||reg2.test(info)){
        $(".tips").css("display","none");
        flag=true;
    }else{
            $(".tips").css("display","block");
            $(".tips").html("帐号须由6-18个字符组成");
             flag=false;
    }
    //验证码的框出现
    $(".yzheng").css("display","block");
    //判断用户名有没有被注册
    if(flag){
        $.post("/lead_uname",{uname:info},function (data) {
            if(data==0){
                $(".tips").css("display","block");
                $(".tips").html("该用户名已被注册");
                flag=false;
                console.log("zc");
            }else if(data==1){
                $(".tips").css("display","none");
                flag=true;
                //console.log("账号成功");
            }
        });
    }
});

$("#pwd").blur(function () {
    var pwd=$("#pwd").val();
    if(pwd==""){
        $(".tips").css("display","block");
        $(".tips").html("密码不能为空");
        flag=false;
    }else if(reg5.test(pwd)){
        $(".tips").css("display","block");
        $(".tips").html("密码过于简单，请重新设置");
        flag=false;
    }else if(reg4.test(pwd)){
        $(".tips").css("display","none");
        //console.log("密码成功");
        flag=true;
    }else{
        $(".tips").css("display","block");
        $(".tips").html("密码须由6-16个字符组成，区分大小写");
        flag=false;
    }
});
$("#yzmContent").blur(function () {
    var yzm=$("#yzmContent").val();
    var code=$("#code").html();

    if(yzm==""){
        $(".tips").css("display","block");
        $(".tips").html("验证码不能为空");
        flag=false;
    }else if(yzm.toUpperCase()==code||yzm==code){
        $(".tips").css("display","none");
        //console.log("验证码成功");
        flag=true;
    }else if(yzm!=code){
        $(".tips").css("display","block");
        $(".tips").html("验证码不正确，请重新输入");
        flag=false;
    }
});

//验证码
var code;
function creatCode(length) {
    code="";
    var codeLength=length||4;
    var random=new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    for(var i=0;i<codeLength;i++){
        var index=Math.floor(Math.random()*36);
        code+=random[index];
    }
    document.getElementById("code").innerHTML=code;
}
creatCode();

    $(".into-zc").click(function () {
        if(flag){
            var uname=$("#email").val();
            var pwd=$("#pwd").val();
            $.post("/lead_reg",{uname:uname,pwd:pwd},function (data) {
                if(data==1){
                    //alert("注册成功");
                    var into=confirm("您已注册成功，是否去登录");
                    if(into){
                        window.open("/index/dl");
                    }else{//留在此页面，但输入框的信息清空
                        // $("#email").val("");
                        // $("#pwd").val("");
                      window.location.reload();
                    }
                }
            })
        }
    });








