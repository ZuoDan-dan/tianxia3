/**
 * Created by Administrator on 2017/8/18 0018.
 */
$(function(){
    var branch_len = $('.branch li').length;
    var branch_img_len = $('.branch img').width();
    var branch_img_count_len = parseInt(branch_len * branch_img_len);

    $(".prev").click(function(){
        if(!$(".branch li:first").is(":animated")){
            $(".branch li:first").animate({'marginLeft':'-=210px'},function(){
                $(".branch li:first").css('marginLeft',0);
                $('.branch').append($(".branch li:first"));
            });
        }
    });
    $(".next").click(function(){
        if(!$(".branch li:first").is(":animated")){
            $('.branch').prepend($(".branch li:last"));
            $('.branch li:first').css({'marginLeft':'-210px'});
            $(".branch li:first").animate({'marginLeft':'+=210px'},function(){
                $(".branch li:first").css('marginLeft','0px');
            });
        }
    });
});