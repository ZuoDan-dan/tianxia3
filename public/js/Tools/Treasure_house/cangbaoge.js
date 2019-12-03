/**
 * Created by admin on 2017/7/23.
 */
$("#tx").click(function(){
    $(".areaList #tx a").css("color","#ffd800");
    $(".areaList #tx").css("background-position","0 0");
    $(".areaList #sd a,.areaList #fj a,.areaList #ln a,.areaList #hb a,.areaList #hn a").css("color","");
    $(".areaList #sd,.areaList #fj,.areaList #ln,.areaList #hb,.areaList #hn").css("background-position","");
    $(".serverList").show();
    $(".serverList2,.serverList3,.serverList4,.serverList5,.serverList6").hide();
    }
);
$("#sd").click(function(){
    $(".areaList #sd a").css("color","#ffd800");
    $(".areaList #sd").css("background-position","0 0");
    $(".areaList #tx a,.areaList #fj a,.areaList #ln a,.areaList #hb a,.areaList #hn a").css("color","");
    $(".areaList #tx,.areaList #fj,.areaList #ln,.areaList #hb,.areaList #hn").css("background-position","");
    $(".serverList2").show();
    $(".serverList,.serverList3,.serverList4,.serverList5,.serverList6").hide();
    }
);
$("#fj").click(function(){
    $(".areaList #fj a").css("color","#ffd800");
    $(".areaList #fj").css("background-position","0 0");
    $(".areaList #tx a,.areaList #sd a,.areaList #ln a,.areaList #hb a,.areaList #hn a").css("color","");
    $(".areaList #tx,.areaList #sd,.areaList #ln,.areaList #hb,.areaList #hn").css("background-position","");
    $(".serverList3").show();
    $(".serverList,.serverList2,.serverList4,.serverList5,.serverList6").hide();
    }
);
$("#ln").click(function(){
        $(".areaList #ln a").css("color","#ffd800");
        $(".areaList #ln").css("background-position","0 0");
        $(".areaList #tx a,.areaList #sd a,.areaList #fj a,.areaList #hb a,.areaList #hn a").css("color","");
        $(".areaList #tx,.areaList #sd,.areaList #fj,.areaList #hb,.areaList #hn").css("background-position","");
        $(".serverList4").show();
        $(".serverList,.serverList2,.serverList3,.serverList5,.serverList6").hide();
    }
);
$("#hb").click(function(){
        $(".areaList #hb a").css("color","#ffd800");
        $(".areaList #hb").css("background-position","0 0");
        $(".areaList #tx a,.areaList #sd a,.areaList #fj a,.areaList #ln a,.areaList #hn a").css("color","");
        $(".areaList #tx,.areaList #sd,.areaList #fj,.areaList #ln,.areaList #hn").css("background-position","");
        $(".serverList5").show();
        $(".serverList,.serverList2,.serverList3,.serverList4,.serverList6").hide();
    }
);
$("#hn").click(function(){
        $(".areaList #hn a").css("color","#ffd800");
        $(".areaList #hn").css("background-position","0 0");
        $(".areaList #tx a,.areaList #sd a,.areaList #fj a,.areaList #ln a,.areaList #hb a").css("color","");
        $(".areaList #tx,.areaList #sd,.areaList #fj,.areaList #ln,.areaList #hb").css("background-position","");
        $(".serverList6").show();
        $(".serverList,.serverList2,.serverList3,.serverList4,.serverList5").hide();
    }
);