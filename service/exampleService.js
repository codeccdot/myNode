// const {bd_eqlist} = require('../model/bd_eqList');
// const sequelize = require ("../model/DBconfig"); //需要与连接池配对才可以使用sequelize.query()函数
// const Op = sequelize.Op; // 模糊查询

// // 变电设备服务类
// class eqlistService{
// // 获取变电设备模板列表 分页
//   async getEqlist(pageNum, pageSize,query) {
//     //模糊查询 eq_name 设备名称 eq_type 设备类型  #eq_id 每个添加设备操作id
//     let where = {}
//     if(query.eq_name!==undefined){
//         where.eq_name = {[Op.like]: "%" + query.eq_name + "%",}
//     }
//     if(query.eq_type!==undefined){
//         where.eq_type= {[Op.like]: "%" + query.eq_type + "%",}
//     }
//     if(query.eq_id!==undefined){
//         where.eq_id= query.eq_id
//     }
//     return bd_eqlist.findAndCountAll({
//       where:where,
//       offset: (pageNum - 1) *pageSize,
//       limit: pageSize,
//     });
//   }


//  //更新关联变电设备模板数量 
//   async updatedSame(sameStr,id){
//     let sqlStr;
//     sqlStr = `update biz_bdz set model_count = ${sameStr} where id ="${id}" `
//     return sequelize.query(sqlStr, { raw: true })
//     }

// //查询单列总值 
// /**
//  * 
//  * @param {*} tableName 表名
//  * @param {*} columnName 单列字段 需要时整数类型
//  * @param {*} selectName  限定查询字段
//  * @param {*} selectStr 限定查询字段值
//  * @returns 
//  */
// async checkSum(tableName,columnName,selectName,selectStr){
//     let sqlStr;
//     sqlStr = `select Sum(${columnName}) from ${tableName} where  ${selectName} = "${selectStr}"`
//     return sequelize.query(sqlStr, { raw: true })
      
// }

//  //新增或更新变电设备模板   思路根据 列表更新 => 查询单列数据总值赋值给关联表字段
//   async insertEqlist(list){
//     let sameStr = 0 ;
//     let id = ""
//     id = list[0].bdz_id //变电站id
//     let Main_id = list[0].id //主表id
//     let date = require('moment')().format('YYYY-MM-DD HH:mm:ss'); //获取当前时间
//     for(let i = 0 ;i<list.length;i++){
//         list[i].createdAt = date
//         list[i].updatedAt = date  
//         sameStr = sameStr + Number(list[i].model_count)
//     }
//     //添加
//     let obj = JSON.parse(JSON.stringify(list)) 
//     let sqlStr = ''
//     if (obj) {
//     for(let i =0 ;i<obj.length;i++){		
//         let keys = Object.keys(obj[i])
//         let keyStr = keys.toString()
//         let valStr = ''
//         keys.forEach((item, index) => {
//             if (keys.length - 1 == index) {
//                 valStr += ('"' + obj[i][item] + '"')
//             } else {
//                 valStr += ('"' + obj[i][item] + '",')
//             }
//         })
//         sqlStr = `replace into biz_eqlist  (${keyStr}) values ( ${valStr}) `  //执行列表更新sql
//     sequelize.query(sqlStr, {raw: true}).then(projects => {
//         let Sum = this.checkSum("biz_eqlist","model_count","bdz_id",id) //查询模板总值 返回promise对象
//         Sum.then(res =>{
//         res = res[0][0]
//         let count = ''
//         for(let key in res){
//             count = res[key] //获得模板总值
//         }
//         this.updatedSame(count,id)   //更新为最新模板数量总值 
//         }) 
   
//     })
//        }
 
    
//   }
// }

 


// };



// module.exports = new eqlistService();
