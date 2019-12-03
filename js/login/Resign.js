/**
 * Created by Administrator on 2017/8/21.
 */
var flg=false;
var gf=false;
$(function() {
    $("#normal").click(function () {
        $("#normal").css({
            background: "#ca5252",
            color: "#fff"
        });
        $("#spacial").css({
            background: "#fff",
            color: "gray"
        });
        $(".new").css("display", "block");
        $("form").css("display", "block");
        $("#spacialPage").css("display", "none");
    });
    $("#spacial").click(function () {
        $("#spacial").css({
            background: "#ca5252",
            color: "#fff"
        });
        $("#normal").css({
            background: "#fff",
            color: "gray"
        });
        $(".new").css("display", "none");
        $("form").css("display", "none");
        $("#spacialPage").css("display", "block");
    });
    // 图片验证码
    var v_timer=null;
    $(".input_checkCode1").mouseover(function(ev){
        $(".checkCode_img").css("display","block");
    });
    $(".input_checkCode1").mouseout(function(ev){
        v_timer=setTimeout(function () {
            $(".checkCode_img").css("display","none");
        },1500)
    });
    $(".checkCode_img").mouseover(function () {
       clearTimeout(v_timer);
        $(".checkCode_img").css("display","block");
    });
    $(".checkCode_img").mouseout(function () {
        $(".checkCode_img").css("display","none");
    });
    // $(".input_checkCode1").click(function(ev){
    //     $(".checkCode_img").css("display","block");
    //     $(".input_checkCode1").unbind("mouseout");
    // });

    // 点击文字
    var count=0;

    $(".check_icon").click(function(){
        var index=$(this).index();
        console.log(index);
        $(".check_icon").eq(index).css("opacity","1");
        count++;
        console.log(count);
        if(count==3){
            $(".point4").find("span").eq(0).removeClass("ferrorTail");
            $(".point4").find("span").eq(1).hide();
            $(".point4").find("span").eq(0).addClass("succ");
            flg=true;
            setTimeout(function(){
                $(".checkCode_img").css("display","none");
            },1000);
            $(".input_checkCode1").unbind("mouseover");
        }
    });

    $(".span2").click(function () {
        $(".checked").css("display", "block");
    });
    $(".checked").click(function () {
        $(".checked").css("display", "block");
    });

    var str1="@163.com";
    var str2="@126.com";
    var str3="@yeah.net";
    var str4="@188.com";
    var str5="@vip.163.com";
    var str6="@vip.126.com";

    /*var input_txt1=$(".input_txt1").val();
    //console.log($(".input_txt1").val());
   $(".sel").append("<div class='item active'>"+input_txt1+"</div>")*/


});

//失焦事件，判断账号是否为null，再判断账号是否存在，判断新账号是否满足要求
var reg1=/^([a-z]|[A-Z])[0-9a-zA-Z]{5,15}(@163.com|@126.com|@yeah.net|@Vip.163.com|@Vip.126.com)$/;     //以字母开头
var reg2=/^[1-9]\d{10}@163.com$/;              //电话号码
var reg3=/^[1-9]\d{4,10}@qq.com$/;      //qq邮箱
var reg4=/\S{6,16}/;
var reg5=/^\d{6,16}$/;

function checkInfos(obj,tabName,colName){
    var info=obj.value;
    if(info!="" && (reg1.test(info) || reg2.test(info) || reg3.test(info) ) ){
                $(obj).css("border-color","#ddd;");
                $(".point1").find("span").eq(1).hide();
                $(".point1").find("span").eq(0).removeClass("ferrorTail");
                $(".point1").find("span").eq(0).addClass("succ");
                 gf=true;
        //开始发送请求，来判断这个用户名是否存在
        // $.get("/index/checkUserUid",{uname:info},function(data){
        //     if(data==1){     //未注册
        //         $(obj).css("border-color","#ddd;");
        //         $(".point1").find("span").eq(1).hide();
        //         $(".point1").find("span").eq(0).removeClass("ferrorTail");
        //         $(".point1").find("span").eq(0).addClass("succ");
        //     } else{       /*账号已存在*/
        //         $(obj).css("border-color","red");
        //         $(".point1").find("span").eq(0).removeClass("succ");
        //         $(".point1").find("span").eq(0).addClass("ferrorTail");
        //         $(".point1").find("span").eq(1).show().text("该账号已注册");
        //     }
        // });
    }else{
        $(obj).css("border-color","red");
        $(".point1").find("span").eq(0).removeClass("succ");
        $(".point1").find("span").eq(0).addClass("ferrorTail");
        $(".point1").find("span").eq(1).show();
        gf=false;
    }
    if( reg3.test(info) ){
        $(".input_txt2").val(info);
    }
    $(".clear_txt1").show();
}
$(".input_pwd1").on("blur",function(){
    var pwd=$(this).val();
    if( reg5.test(pwd) ){   //密码全是数字
        $(this).css("border-color","red");
        $(".point2").find("span").eq(0).removeClass("succ");
        $(".point2").find("span").eq(0).addClass("ferrorTail");
        $(".point2").find("span").eq(1).show();
        $(".clear_txt2").show();
        gf=false;
    }else if( reg4.test(pwd) ){
        $(this).css("border-color","#ddd;");
        $(".point2").find("span").eq(1).hide();
        $(".point2").find("span").eq(0).removeClass("ferrorTail");
        $(".point2").find("span").eq(0).addClass("succ");
        $(".clear_txt2").show();
        gf=true;
    } else{
        $(".input_pwd2").css("border-color","red");
        $(".point2").find("span").eq(0).removeClass("succ");
        $(".point2").find("span").eq(0).addClass("ferrorTail");
        $(".point2").find("span").eq(1).show().text("密码须由6-16个字符组成，区分大小写");
        $(".clear_txt2").show();
        gf=false;
    }
});

//确认密码
function checkInfos3(obj){
    // var md5Pwd=$.md5 ( $(".input_pwd1").val() );
    // var repwd=$.md5( $(".input_pwd2").val()   );
    var md5Pwd=$(".input_pwd1").val();
    var repwd=$(".input_pwd2").val() ;
    if(md5Pwd!=repwd){
        $(obj).css("border-color","#ddd;");
        $(".point3").find("span").eq(0).removeClass("succ");
        $(".point3").find("span").eq(0).addClass("ferrorTail");
        $(".point3").find("span").eq(1).show();
        gf=false;
    }else{
        $(obj).css("border-color","#ddd;");
        $(".point3").find("span").eq(0).removeClass("ferrorTail");
        $(".point3").find("span").eq(1).hide();
        $(".point3").find("span").eq(0).addClass("succ");
        gf=true;
    }
    $(".clear_txt3").show();
}

//验证邮箱
function checkInfos5(obj){
    var Email=$(obj).val();
    if( reg3.test(Email) ){
        $(obj).css("border-color","#ddd;");
        $(".point5").find("span").eq(0).removeClass("ferrorTail");
        $(".point5").find("span").eq(1).hide();
        $(".point5").find("span").eq(0).addClass("succ");
        gf=true;
    }else{
        $(obj).css("border-color","#ddd;");
        $(".point5").find("span").eq(0).removeClass("succ");
        $(".point5").find("span").eq(0).addClass("ferrorTail");
        $(".point5").find("span").eq(1).show();
        gf=false;
    }
    $(".clear_txt4").show();

}

//获取验证码
// var Ecode;
// var odate;
// $(".input_sbt1").click(function(){
//     var str="";
//     var Email=$(".input_txt2").val();
//     if(Email==""|| Email==null){
//         $(".point6").find("span").eq(0).removeClass("succ");
//         $(".point6").find("span").eq(0).addClass("ferrorTail");
//         $(".point6").find("span").eq(1).show().text("请输入邮箱！").css("color","red");
//     }else{
//         str+=parseInt(Math.random()*9+1);
//         for(var i=1;i<4;i++){
//             str+=parseInt(Math.random()*10);
//         }
//         Ecode=parseInt(str);
//         var d=new Date();
//         odate=d.getFullYear()+","+(d.getMonth()+1)+","+d.getDate()+" "+d.getHours()+":"+
//             d.getMinutes()+":"+d.getSeconds();
//         console.log(odate);
//
//         $.post("/index/Ecode",{Ecode:Ecode,Email:Email,odate:odate},function(data){
//             if(data==1){
//                 $(".point6").find("span").eq(0).removeClass("ferrorTail");
//                 $(".point6").find("span").eq(0).addClass("succ");
//                 $(".point6").find("span").eq(1).show().text("正在发送验证码").css("color","#71C86F");
//             }
//         })
//     }
// });

//判断验证码
var flag=false;

$(".input_checkCode2").blur(function(){
    var Ecode=1234;
    var info=$(this).val();
    // console.log(Ecode);
    // console.log(info);
    if(info==Ecode){
        $(this).css("border-color","#ddd;");
        $(".point6").find("span").eq(0).removeClass("ferrorTail");
        $(".point6").find("span").eq(1).hide();
        $(".point6").find("span").eq(0).addClass("succ");
        flag=true;
    }else{
        $(".point6").find("span").eq(0).removeClass("succ");
        $(".point6").find("span").eq(0).addClass("ferrorTail");
        $(".point6").find("span").eq(1).show();
        flag=false
    }
});


if($(".agree .check").checked){
    gf=true;
}else{
    gf=false;
};

//注册
$("#input_sbt2").click(function(){
    var uname=$(".input_txt1").val();
    var pwd=$(".input_pwd1").val();
    var md5Pwd=$(".input_pwd1").val();
    var repwd=$(".input_pwd2").val();
    var Email=$(".input_txt2").val();

    if( reg3.test(Email) && reg4.test(pwd) && md5Pwd==repwd  && flag &&flg && gf) {
        var yn=confirm("注册成功，去登录？");
        if(yn){
            window.open("Login_l.html");
        }else{
            window.location.reload();
        }
        // $.post("/index/register", {uname: uname, pwd: md5Pwd,odate:odate}, function (data) {
        //     if (data == 2) {
        //         window.open("/index/dl");
        //     } else if (data == 0) {
        //         alert("网络连接失败，请稍后重试");
        //     }
        // });
    }
});


setInterval(function () {
    if(flag&&flg&&gf){
        $("#content_main .input_sbt2").css("opacity",1);
    }
},1);




