const Router = require('koa-router');
const  bdz_eqlistController = require('../controller/bdz_eqlistController.js');
const router = new Router()


router.prefix('/bdz_eqlist')  // 目录

//变电站具体设备接口 功能 数据结构
router.post('/getList', bdz_eqlistController.getEqlist); //查询总列表 分页
router.post('/insertUp', bdz_eqlistController.insertEqlist); //新增或者更新变电设备模板
// router.get('/delList', bdz_eqController.deleteEq); //删除变电站


module.exports = router;