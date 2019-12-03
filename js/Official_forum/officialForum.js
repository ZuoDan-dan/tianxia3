/**
 * Created by admin on 2017/8/17.
 */
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.j-tabpane').length;
    //将除了第一张图片隐藏
    $('.j-tabpane:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.j-tabctrl:first').addClass('slider-item-selected');
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.j-tabpane').hover(function() {
        stop();
    }, function() {
        start();
    });
    $('.j-tabctrl').hover(function(e) {
        stop();
        var preIndex = $(".j-tabctrl").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    /*
     向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /*
     从preIndex页翻到currentIndex页
     preIndex 整数，翻页的起始页
     currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.j-tabpane').eq(preIndex).hide()
            .parent().children().eq(currentIndex).show();
        $('.j-tabctrl').removeClass('slider-item-selected');
        $('.j-tabctrl').eq(currentIndex).addClass('slider-item-selected');
    }
    /*
     开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /*
     停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();


var flag=false;

//失焦事件，判断账号是否为null，再判断账号是否存在，判断新账号是否满足要求
var reg1=/^([a-z]|[A-Z])[0-9a-zA-Z]{5,15}(@163.com|@126.com|@yeah.net|@Vip.163.com|@Vip.126.com)$/;     //以字母开头
var reg2=/^[1-9]\d{10}@163.com$/;              //电话号码
var reg3=/^[1-9]\d{4,10}@qq.com$/;      //qq邮箱
var reg4=/\S{6,16}/;
var reg5=/^\d{6,16}$/;

$("#email").blur(function () {
    var info=$("#email").val();
    if($("#email").val()==""){
        $(".ts").css("display","block");
        $(".ts").html("账号不能为空");
        flag=false;
    }else if(reg3.test(info)||reg1.test(info)||reg2.test(info)){
        $(".ts").css("display","none");
        flag=true;
    }else{
        $(".ts").css("display","block");
        $(".ts").html("帐号须由6-18个字符组成");
        flag=false;
    }
    //验证码的框出现
    $(".yzheng").css("display","block");
    //判断用户名有没有被注册
    if(flag){
        $.post("/lead_uname",{uname:info},function (data) {
            if(data==0){
                //说明有
                $(".ts").css("display","none");
                flag=true;
            }else if(data==1){
                //说明没有
                $(".ts").css("display","block");
                $(".ts").html("该用户不存在");
                flag=false;
            }
        });
    }
});

$("#pwd").blur(function () {
    var pwd=$("#pwd").val();
    if(pwd==""){
        $(".ts").css("display","block");
        $(".ts").html("密码不能为空");
        flag=false;
    }else if(reg5.test(pwd)){
        $(".ts").css("display","block");
        $(".ts").html("密码过于简单，请重新设置");
        flag=false;
    }else if(reg4.test(pwd)){
        $(".ts").css("display","none");
        //console.log("密码成功");
        flag=true;
    }else{
        $(".ts").css("display","block");
        $(".ts").html("密码须由6-16个字符组成，区分大小写");
        flag=false;
    }
});

$("#forum_log").click(function () {
    if(flag){
        var uname=$("#email").val();
        var pwd=$("#pwd").val();
        $.post("/forum/forum_dl",{uname:uname,pwd:pwd},function (data) {
            if(data==1){
                alert("登录成功");
                window.open("/forum");
            }else{
                alert("登录失败");
            }
        })
    }
});
});