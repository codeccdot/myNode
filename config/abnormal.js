// 全局异常处理中间件
const result = require('./pushAbnormal.js')

const error = async(ctx,next)=>{
try{
    await next()
}catch(err){
  console.log(err)
  const isresult = err instanceof result
//  已知错误提示 ctx = context上下文
  if(isresult){
    ctx.body = {
        msg:err.msg
    }
    ctx.status = err.code
  }else{
    // 未知错误 
    ctx.body = {
        msg:'服务器出现未知错误！'
    }
    ctx.status = 500
    } 
  }
}
module.exports = error 