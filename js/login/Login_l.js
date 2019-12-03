/**
 * Created by Administrator on 2017/8/21.
 */
var flag=false;
var flg=false;
$(function(){
   $("#cLogin_left").mouseover(function(){
       $("#cLogin_right").css({
           background:"#69b3f2",
           border:"1px solid #69b3f2"
       });
       $("#cLogin_left").css({
           background:"#E2F2FC",
           border:"0"
       });
       $("#QRLogin").css("display","none");
       $("#normalLogin").css("display","block");
   });
    $("#cLogin_right").mouseover(function(){
        $("#cLogin_left").css({
            background:"#69b3f2",
            border:"1px solid #69b3f2"
        });
        $("#cLogin_right").css({
            background:"#E2F2FC",
            border:"0"
        });
        $("#normalLogin").css("display","none");
        $("#QRLogin").css("display","block");
    });

    // 验证码
    $(".move").hover(function(){
        $(".move").css("cursor","pointer");
        $("#checkImg").css("display","block");
    },function(){
        //console.log("aaa");
        $("#checkImg").css("display","none");
    });
    // 拖动
    $(window).ready(function(){
        var x;
        $(".move").mousedown(function(ev){
            console.log("yeah");
            var e=window.event || ev;
            // 移动前鼠标的位置
            var startX=e.clientX;
            //console.log("1:"+e.clientX);

                $("#checkBox").mousemove(function(ev){
                    console.log("oops");
                    // 文字消失
                    $(".moveSpan").animate({
                        opacity:"0"
                    },1000);
                    var e=window.event|| ev;
                    // 移动后鼠标的位置
                    var endX=e.clientX;
                    // console.log("2:"+e.clientX);
                    x=endX-startX;
                    console.log("3:"+x);
                    $(".move").css("left",x);
                    $(".img2").css("left",x);
                });


             //当鼠标按键抬起，清除移动事件
            $(document).mouseup(function(ev){
                console.log("gosh");
                if(x>=104 && x<=107){
                    $(".ferrorTail").css("display","block");
                    flag=true;
                }else{
                    console.log("验证失败");
                    flag=false;
                }
                var e=window.event || ev;
                $(".move").unbind("mousedown");
                $("#checkBox").unbind("mousemove");
            });
        });
    });
});

//登录
// $(".input_sbt").click(function(){
//     var uname=$(".input_txt1").val();
//     var md5Pwd=$.md5 ( $(".input_pwd").val() );
//     if( uname!=""||uname!=null || md5Pwd!=""||md5Pwd!=null){
//         $.post("/lead_reg",{uname:uname,pwd:md5Pwd},function(data){
//             if(data==2){
//                 window.open("/");
//             }else{
//                 $("#manager").find(".icon3").removeClass("logo").show();
//                 $("#manager").find(".icon3").addClass("ferr").show();
//                 $("#manager").find(".icon4").html("账号或密码错误！").css("color","red");
//                // $("#manager").html("账号或密码错误！");
//             }
//         })
//     }
// });
$(".input_sbt").click(function(){
            if(flg){
               alert("登录成功");
               window.open("../index/index.html");
            }else{
                $("#manager").find(".icon3").removeClass("logo").show();
                $("#manager").find(".icon3").addClass("ferr").show();
                $("#manager").find(".icon4").html("账号或密码错误！").css("color","red");
                // $("#manager").html("账号或密码错误！");
            }
});
$("#dl").hover(function () {
    $("#dl").css("cursor","pointer");
});
setInterval(function () {
    if($(".input_txt1").val()=='123' && $(".input_pwd").val()=='abc'&&flag){
        $(".dl").css('background-color',"#39A6EC");
        flg=true;
    }
},1);