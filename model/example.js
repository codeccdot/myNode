// const sequelize = require("./DBconfig")
// const {Sequelize,DataTypes} = require('sequelize')

// // 变电站信息表
// const bd_data = sequelize.define('biz_bdz', {
//     id: {
//       type:Sequelize.UUID,
//       allowNull: false,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,// 生成随机id
//       // autoIncrement:true, //生成自增id
//       field: "id",
//       comment:"主表id"
//     },
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false, // 不允许为空
//       comment:"变电站名称"
//     },
//     scale: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       comment:"规模"
//     },
//     model_count: {
//       type: Sequelize.STRING,
//       comment:"变电站规模"
//     },
//      user: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       comment:"模板数量"
//     },
//     state: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       comment:"状态"
//     },
//     create_time: {
//       type: Sequelize.STRING,   
//       comment:"更新时间"
//     },
//     is_ok:{
//       type: Sequelize.STRING,
//       comment:"是否合格"   
//     },
//     ars_state:{
//       type: Sequelize.STRING,
//       comment:"是否入档案库" 
//     }
//   },{
//       tableName: 'biz_bdz',  // 修改表名
//       timestamps: true,  // 默认为true， false禁止创建createAt，updateAt 字段
//       updateAt: 'updateTimestamp', // 创建updateTimestamp字段来代替updateAt 字段。
//   });
//   // 这里可以不定义id, 则表在创建时默认会为我们创建id字段。
//   bd_data.sync({ force: false });


  


//   module.exports = {
//     bd_data
// };