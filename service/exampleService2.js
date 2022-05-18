// const { biz_temDetail } = require("../model/bd_temDetail"); //步骤1到步骤5 实体类
// const { biz_temFiles } = require("../model/bd_temFiles"); //步骤6到步骤8 实体类
// const { biz_temCheck } = require("../model/bd_temCheck"); //步骤9检测数据 实体类
// const { biz_temMain } = require("../model/bd_temMain"); //步骤 非具体数据备注 实体类
// const { bd_eqTem } = require("../model/bd_eqTem") //上级关联表
// const sequelize = require("sequelize");


// // 变电设备服务类
// class eqTemService {
//   //注入数据
//   /**
//    * 思路:将具体数据注入biz_temDetail bd_temCheck bd_temMain
//    * 将文件从biz_temFiles传进去
//    *
//    * @returns
//    */
//   async insertTem(list)  {
//     let tem_id = list.tem_id
//     list.step.tem_id = tem_id
//     let temDetail = list.step; 
//     // this.JsonParser(temDetail)//注入步骤1到步骤5 实体类
//     let position = list.position;
//     let is_export = list.isExport;
//     let step_json = list.stepJson;
//     let pro_name = list.proName;
//     let mp_json = list.mpJson; //注入步骤 非具体数据备注 实体类
//     let temCheck_data = list.step9List[0]; //步骤9检测数据 实体类
//     // 封装好需要的数据类型
//     let temMain = Object.assign({}, {position:position},{step_json:step_json}, {pro_name:pro_name}, {mp_json:mp_json}, {is_export:is_export}
//       ,{tem_id:tem_id}); //封装步骤 非具体数据备注 实体类对象
//     let temCheck = Object.assign({}, 
//     {
//     tool_name:temCheck_data.name,
//     tool_code:temCheck_data.code,
//     check_code:temCheck_data.jyzbh,
//     tool_institute:temCheck_data.jydw,
//     valid_date:temCheck_data.yxq,
//     uid:temCheck_data.uid
//     },{tem_id:tem_id}); //封装 步骤9检测数据 实体类 
//     // 注入数据
//     await this.addtemDetail(temDetail);
//     await this.addtemMain(temMain)
//     await this.addtemCheck(temCheck)
//   }

//   //注入步骤1到步骤5 实体类
//   async addtemDetail(data) {
//     return biz_temDetail.create(data);
//   }
//   //注入步骤 非具体数据备注 实体类
//   async addtemMain(data) {
//     return biz_temMain.create(data);
//   }
//   //步骤9检测数据 实体类
//   async addtemCheck(data) {
//     return biz_temCheck.create(data);
//   }
//   //步骤6-8上传文件 实体类
//   async addtemFlies(data){
//     return biz_temFiles.create(data);
//   }
//   //根据tem_id 查询步骤1到步骤5 实体类数据表
//   async gettemCheck(id){
//     return biz_temCheck.findAll({
//       raw:true,
//       where:{
//         tem_id:id
//       },
//       // attributes: ["eq_name","eq_type"],
//     });
//   }
//   //根据tem_id 注入步骤 非具体数据备注 实体类
//   async gettemMain(id){
//     return biz_temMain.findAll({
//       raw:true,
//       where:{
//         tem_id:id
//       },
//       attributes: ["pro_name","position","mp_json","step_json","is_export","is_admin"],
//     });
//   }
//   //根据tem_id 步骤9检测数据 实体类
//   async gettemDetail(id){
//     return biz_temDetail.findAll({
//       raw:true,
//       where:{
//         tem_id:id
//       },
//       attributes: ["step1Json","step2Json","step3Json","step4_1Json","step4_2Json","step5Json"],
//     });
//   }
//   //根据tem_id查询步骤6-8上传文件 实体类
//   async gettemFlies(id){
//     return biz_temFiles.findAll({
//       raw:true,
//       where:{
//         tem_id:id
//       },
//       attributes: ["type","path","type","size","step","fileName"],
//     });
//   }
//   //查询上级关联模板名称
//   async getModel_name(id){
//     return  bd_eqTem.findAll({
//       raw:true,
//       where:{
//         id:id
//       },
//       attributes: ["model_name"],
//     });
//   }
// }




// module.exports = new eqTemService();
