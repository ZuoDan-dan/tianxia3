/**
 * Created by Administrator on 2017/8/18.
 */
//加载模块
var express=require("express");
var mysql=require("mysql");
var Cookies=require("cookies");
var bodyparser=require("body-parser");
var session=require("express-session");
var swig=require("swig");

//创建app应用
var app=express();

//模板引擎
//1，配置引擎的后缀名  后缀名  解析模板引擎的方法
app.engine("html",swig.renderFile);
//2，设置模板引擎所在的目录，第一个参数不可改  目录名
app.set("views","./view");
//3，使用模板引擎 第一个参数不可改  与上面的设置一致
app.set("view engine","html");
//4,在开发的过程中，我们是不需要缓存的  但是项目上线，这个缓存还是要的
swig.setDefaults({cache:false});

//静态文件托管
app.use("/public",express.static(__dirname + "/public"));

//配置和使用body-parser中间件
app.use(bodyparser.urlencoded({extended:false}));

//配置senssion
app.use(session({
    //这个随便写，但是不要重名
    secret:"keyboard cat",//私密session的唯一标识
    resave:true,//cookie每次默认的有效时间10分钟，每过10分钟，都会自动的再存一次
    saveUninitialized:true,//指无论你有没有设置session cookie，每次请求的时候，都会设置一个session cookie
    cookie:{maxAge:1000*60*60},//设置时间 单位是毫秒
    cookie:{secure:false}//把我们的session也应用在https协议里面
}));

//看用户有没有登录
app.use(function (req,res,next) {
    req.userInfo={};
    if(req.session.userInfo){
        req.userInfo=req.session.userInfo;
    }
    next();
});

//配置数据库连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    database:"tianxia",
    user:"root",
    password:"961218"
});

//路由
//考虑到把所有的业务逻辑都写在一个server.js文件里面，过于庞大，不好查找
//路由的路径  这个路由是哪个文件
app.use("/index",require("./routers/main"));
app.use("/audio",require("./routers/audio"));
app.use("/backtracking",require("./routers/backtracking"));
app.use("/book",require("./routers/book"));
app.use("/features",require("./routers/features"));
app.use("/forum",require("./routers/forum"));
app.use("/",require("./routers/lead"));
app.use("/interactive",require("./routers/interactive"));
app.use("/news",require("./routers/news"));
app.use("/tools",require("./routers/tools"));



app.listen(8888,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...");
    }
});