const Koa = require("koa");
const app = new Koa();
const json = require("koa-json");
const koaBody = require("koa-body");
const cors = require("koa2-cors");  //跨域
const { accessLogger } = require("./log4/log4"); //日志记录文件
const Koa_Logger = require("koa-logger");      // 引入终端日志中间件
const registerRouter  = require('./router/index') //路由
const Moment = require('moment') //日期插件
const path = require("path")  //读取
const {getUploadDirName,checkDirExist,getUploadFileExt} = require("../node 后台模板/utils/getUploadDirname")
const {checkExit} = require("./utils/checkExist") //文件是否存在


const logger = Koa_Logger((str) => {                // 配置终端日志中间件
  console.log("\n"+Moment().format('YYYY-MM-DD HH:mm:ss')+str+"\n");
}); 

app.use(accessLogger());  //写入日志文件
app.use(logger)   //访问日志写入终端

app.use(koaBody({
    multipart: true,
    strict: false, //设为false
    // formidable:{
    //   uploadDir:path.join(__dirname,'public/uploads'), //上传路径
    //   keepExtensions: true,
    //   maxFieldsSize:2 * 1024 * 1024,
      // onFileBegin:(name,file) => {
      //   let fileName = file.name  //源文件名
      //   const ext =getUploadFileExt(file.name); // 获取文件后缀
      //   // console.log(ext,"文件后缀")
      //     //检测文件是否存在
      //     // if(checkExit(file.name)==="不存在"){
      //     //   console.log("\n"+"========================================成功上传:"+file.name+"=============================================="+"\n")
      //     // }else{
      //     //   console.log("\n"+"========================================重复上传"+file.name+"=============================================="+"\n")
      //     // }
      //   // 最终要保存到的文件夹目录  按日期文件夹动态保存文件
      //   const dir = path.join(__dirname,`public/uploads/${getUploadDirName()}`);
      //   // 检查文件夹是否存在如果不存在则新建文件夹
      //   checkDirExist(dir);
      //   // 重新覆盖 file.path 属性
      //   file.path = `${dir}/${fileName}`;
      // },
      // onError:(err)=>{
      //   console.log("上传失败:"+err);
      // }
    // }
  })
);

const staticFiles = require('koa-static');
/**
 *  设置 public文件夹为静态资源文件夹
 * */
app.use(staticFiles(path.join(__dirname , 'public')));

// app.on("error", (err) => {
//   logger.error(err);
// });


// 自己封装的检查异常类
const iserror = require("./config/abnormal.js");
// 读取图片
const url = require("url");
const mime = require("mime-types");


// 单点登录--------------------------
// const session = require('koa-session')
// app.keys = ['secret']	// session加密字段
// app.use(session({
//     key: 'koa:sess', //cookie key (default is koa:sess)
//     maxAge: 86400000, // cookie的过期时间 maxAge in ms (default is 1 days)
//     overwrite: true, //是否可以overwrite    (默认default true)
//     httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
//     signed: true, //签名默认true
//     rolling: false, //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
//     renew: false, //(boolean) renew session when session is nearly expired,
// }, app))


// // 模块-jwt验证(token)
// const koajwt = require("koa-jwt");
// const jwt = require("jsonwebtoken");
// const jwtKoa = require("koa-jwt");
// const util = require("util");


// // 单点登录模块入口
// const verify = util.promisify(jwt.verify);

// // 密钥名称
// const secret = "test";

// app.use((ctx, next) => {
//   return next().catch((err) => {
//     if(err.status === 401){
//       ctx.status = 401;
//       ctx.body = 'Protected resource, use Authorization header to get access\n';
//     }else{
//       throw err;
//     }
//   })
// })

// // 白名单 
// app.use(jwtKoa({ secret }).unless({
//   path: ["/bdz_data/getList"]
//   })
// );



// 单点登录 control
// registerRouter.post("/login", async (ctx, next) => {
//   const { username, password , code } = ctx.request.body;
//   const checkCode = ctx.session.code
//   // if(checkCode!==code){
//   //   ctx.body = {
//   //     message: "验证码错误",
//   //     code: 302,
//   //   };  
//   //  return 
//   // }
//   if (username && password) {
//     const account = AccountService.getAccountByUserName(username);
//     let res = await account;
//     if(res.length==0){
//         ctx.body = {
//             message: "用户不存在",
//             code: 302,
//           };  
//          return 
//     }
//     let permission = res[0].permission
//     let mypassword = res[0].password;
//     let user = res[0].username;
//     let role = res[0].role;
//     let id = res[0].id;
//     let startdate = res[0].createAt;
//     let inTime = format
//     //  用户资料
//     let list = [
//       {
//         username:user,
//         id:id,
//         time:inTime.parseTime(),
//         role: role,
//         permission:permission
//       },
//     ];
//     let userToken = {
//       name: password
//     };
//     const token = jwt.sign(userToken, secret, { expiresIn: "0.5h" }); //token签名 有效期
//     //    核对密码
//     if (mypassword === password) {
//       ctx.body = {
//         message:  response[200],
//         code: 200,
//         token:token,
//         data:list
//       };
//     } else {
//       ctx.body = {
//         message: "密码错误",
//         code: 302,
//       };
//     }
//   } else {
//     ctx.body = {
//       message: res[301],
//       code: 301,
//     };
//   }
// });


// 使用异常json检查包
// const error = require('koa-json-error')
// const exportService = require('./service/showtable');

// 异常中间件需要放置头部
app.use(iserror);
app.use(cors());
app.use(json());
app.use(registerRouter())

// 静态文件目录
app.use(require("koa-static")(__dirname))
app.listen(8085);

console.log("变电系统正在连接——8085");
