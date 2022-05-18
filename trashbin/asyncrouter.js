// const router = require('koa-router')();
// const multer = require('koa-multer');
// const  bdz_dataController = require('../controller/bdz_data.js');
// const bdz_eqController = require("../controller/bdz_eq.js")

// // -----------------------------------------------接口----------------------------------------
// // 1 变电站列表接口
// router.get('/bdz_data/getList', bdz_dataController.getBdz); //查询总列表
// router.post('/bdz_data/addList', bdz_dataController.createBdz); //新增变电站
// router.get('/bdz_data/delList', bdz_dataController.deleteBdz); //删除变电站
// router.post('/bdz_data/checkList', bdz_dataController.checkBdz); //删除变电站
// router.post('/bdz_data/checkName', bdz_dataController.checkBdzName); //查询变电站名称列表

// //2 变电站具体设备接口
// router.post('/bdz_eq/addList', bdz_eqController.addEq); //新增变电设备模板
// router.get('/bdz_eq/getList', bdz_eqController.getEq); //查询总列表
// router.get('/bdz_eq/delList', bdz_dataController.deleteBdz); //删除变电站







// //配置
// var storage = multer.diskStorage({
//     //文件保存路径
//     destination: function (req, file, cb) {
//         cb(null, '/image')
//     },
//     //修改文件名称
//     filename: function (req, file, cb) {
//         var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
//         cb(null,req.body.stuName + "." + fileFormat[fileFormat.length - 1]);
//     }
// });
 
// //加载配置
// var upload = multer({ storage: storage });

// module.exports = router;
