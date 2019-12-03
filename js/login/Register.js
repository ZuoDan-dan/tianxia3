/**
 * Created by Administrator on 2017/8/26.
 */
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
                var into=confirm("您已注册成功，是否去登录");
                if(into){
                    window.open("/index/dl");
                }
            }
        })
    }
});