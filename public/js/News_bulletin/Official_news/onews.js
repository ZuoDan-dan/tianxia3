/**
 * Created by Administrator on 2017/8/25.
 */
var page=0;
var datas;
$.post("/news/official_news",function (data) {
    datas=data;
    var count=data.length;
    var str0="";
    var pageSize=10;
    var pages=Math.ceil(count/pageSize);
    var pagec=1;
    str0+='<a class="prev" href="javascript:;"><i onclick="prev(this)">上一页</i></a>';
    for(var i=0;i<pages;i++){
        if(i==page){
            str0+='<a id="p_bg"  href="javascript:;" ><i onclick="topage(this)">'+pagec+'</i></a>';
        }else{
            pagec++;
            str0+='<a  href="javascript:;"><i onclick="topage(this)">'+pagec+'</i></a>';
        }
    }
    str0+='<a class="next" href="javascript:;"><i onclick="next(this)">下一页</i></a>';

    $(".paging").prepend(str0);
    $("#page").html(page+1);
    $("#pages").html(pages);

    var max;
    //考虑到最后一页的内容可能不足十条
    if(datas.length-page*pageSize<pageSize){
        //console.log(page);
        //console.log(datas.length);
        //console.log(datas.length-page*pageSize);
        max=page*pageSize+(datas.length-page*pageSize);
        //console.log(max);
    }else{
        max=(page+1)*pageSize;
    }
    for(var i=page*pageSize;i<max;i++){
        var m=data[i].cdate.substring(5,7);
        console.log(m);
        var d=data[i].cdate.substring(8,10);
        console.log(d);
        var  str='';
        if(i==page*pageSize&&data[i].cdate==data[i+1].cdate){
            //i=0并且与下一个日期相同，加日期不加last
            str='<div class="news1"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }else if(i==page*pageSize&&data[i].cdate!=data[i+1].cdate){
            //i=0并且与下一个日期不相同，加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }else if(i==max-1&&data[i].cdate==data[i-1].cdate){
            //最后一个，若与上一个相同，不加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }else if(i==max-1&&data[i].cdate!=data[i-1].cdate){
            //最后一个，若与上一个不相同，加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }else if(data[i].cdate==data[i-1].cdate&&data[i].cdate==data[i+1].cdate){
            //与上一个同，与下一个同，不加日期,不加last
            str='<div class="news1"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }else if(data[i].cdate==data[i-1].cdate&&data[i].cdate!=data[i+1].cdate){
            //与上一个同，与下一个不同，不加日期,加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }

        else if(data[i].cdate!=data[i-1].cdate&&data[i].cdate==data[i+1].cdate){
            //与上一个不同，与下一个同，加日期
            str='<div class="news1"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }else if(data[i].cdate!=data[i-1].cdate&&data[i].cdate!=data[i+1].cdate){
            //与上一个不同，与下一个不同，加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+data[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+data[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+data[i].description+'</div> ' +
                '</div>';
        }
        $("#container").append(str);
    }
});

function topage(obj) {
    $("#container").html("");
    //console.log(obj.innerHTML);
    page=Number(obj.innerHTML)-1;
    //console.log(datas[0].cdate);
    var count=datas.length;
    //console.log(count);
    var pageSize=10;
    var pages=Math.ceil(count/pageSize);
    var str1="";
    var pagec=1;
    $(".paging").html("");
    content();
};

function next() {
    count=datas.length;
    pageSize=10;
    pages=Math.ceil(count/pageSize);
    $("#container").html("");
    page=page+1;
    if(page>=pages){
        page=pages-1;
    }
    var count=datas.length;
    //console.log(count);
    var pageSize=10;
    var pages=Math.ceil(count/pageSize);
    var str1="";
    var pagec=1;
    $(".paging").html("");
    content();
}
function prev() {
    $("#container").html("");
    page=page-1;
    if(page<0){
        page=0;
    }
    var count=datas.length;
    //console.log(count);
    var pageSize=10;
    var pages=Math.ceil(count/pageSize);
    var str1="";
    var pagec=1;
    $(".paging").html("");
    content();
}
function content() {
    var count=datas.length;
    var pageSize=10;
    var pages=Math.ceil(count/pageSize);
    var str1="";
    var pagec=1;
    str1+='<a class="prev" href="javascript:;"><i onclick="prev(this)">上一页</i></a>';
    for(var i=0;i<pages;i++){
        if(i==page){
            str1+='<a id="p_bg"  href="javascript:;" ><i onclick="topage(this)">'+pagec+'</i></a>';
            pagec++;
        }else{
            str1+='<a  href="javascript:;"><i onclick="topage(this)">'+pagec+'</i></a>';
            pagec++;
        }
    }
    str1+='<a class="next" href="javascript:;"><i onclick="next(this)">下一页</i></a>第<span id="page">1</span>页 共<span id="pages">50</span>页';

    $(".paging").html(str1);
    $("#page").html(page+1);
    $("#pages").html(pages);

    var max;
    //考虑到最后一页的内容可能不足十条
    if(datas.length-page*pageSize<pageSize){
        //console.log(page);
        //console.log(datas.length);
        //console.log(datas.length-page*pageSize);
        max=page*pageSize+(datas.length-page*pageSize);
        //console.log(max);
    }else{
        max=(page+1)*pageSize;
    }
    for(var i=page*pageSize;i<max;i++){
        var m=datas[i].cdate.substring(5,7);
        // console.log(m);
        var d=datas[i].cdate.substring(8,10);
        // console.log(d);
        var  str='';
        if(i==max-1&&datas[i].cdate==datas[i-1].cdate){
            //最后一个，若与上一个相同，不加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }else if(i==max-1&&datas[i].cdate!=datas[i-1].cdate){
            //最后一个，若与上一个不相同，加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }else if(i==page*pageSize&&datas[i].cdate==datas[i+1].cdate){
            //i=0并且与下一个日期相同，加日期不加last
            str='<div class="news1"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }else if(i==page*pageSize&&datas[i].cdate!=datas[i+1].cdate){
            //i=0并且与下一个日期不相同，加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }else if(datas[i].cdate==datas[i-1].cdate&&datas[i].cdate==datas[i+1].cdate){
            //与上一个同，与下一个同，不加日期,不加last
            str='<div class="news1"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }else if(datas[i].cdate==datas[i-1].cdate&&datas[i].cdate!=datas[i+1].cdate){
            //与上一个同，与下一个不同，不加日期,加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }

        else if(datas[i].cdate!=datas[i-1].cdate&&datas[i].cdate==datas[i+1].cdate){
            //与上一个不同，与下一个同，加日期
            str='<div class="news1"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }else if(datas[i].cdate!=datas[i-1].cdate&&datas[i].cdate!=datas[i+1].cdate){
            //与上一个不同，与下一个不同，加日期加last
            str='<div class="news1 last"> ' +
                '<h3 class="news_title"> ' +
                '<a>'+datas[i].title+'</a> ' +
                '</h3> ' +
                '<p class="news_info"> ' +
                '<span class="news_author">'+datas[i].author+'</span> ' +
                '<span class="news_date"> ' +
                '<span class="news_date_d">' +
                d +
                '<sup>th</sup> ' +
                '</span> ' +
                '<span class="news_date_line"></span> ' +
                '<span class="news_date_m">'+m+'</span> ' +
                '</span> ' +
                '</p> ' +
                '<div class="news_quote">'+datas[i].description+'</div> ' +
                '</div>';
        }
        $("#container").append(str);
    }
}