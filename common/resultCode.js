module.exports = {
  successCode: async(msg,data,arr=null)=>{
    if(arr==null){
      delete arr
    }
    return  {
        code:200,
        msg:msg,
        data:data,
        arr:arr
     }
  }
}