const Router = require('koa-router');
const  bdz_temController = require('../controller/bdz_temController.js');
const router = new Router()


router.prefix('/bdz_tem')  // 目录

//测试模板具体数据接口

router.post('/insertList',bdz_temController.insertTem); //注入模板数据
router.get('/getList',bdz_temController.getTem)  //获取模板信息
router.get('/importWord',bdz_temController.importWord)
module.exports = router