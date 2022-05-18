const Router = require('koa-router');
const  bdz_eqTemController = require('../controller/bdz_eqTemController.js');
const router = new Router()


router.prefix('/bdz_eqTem')  // 目录

//变电站具体设备接口 功能 数据结构
router.post('/getList', bdz_eqTemController.getEq); //查询总列表 分页
router.post('/addList', bdz_eqTemController.createEq); //新增变电设备模板
router.get('/getTypeList', bdz_eqTemController.getEq_name); //获取设备列表
// router.get('/delList', bdz_eqController.deleteEq); //删除变电站


module.exports = router