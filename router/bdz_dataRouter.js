const Router = require('koa-router');
const router = new Router()

const  bdz_dataController = require('../controller/bdz_dataController.js');

router.prefix('/bdz_data') // 变电站列表接口

//变电站列表 功能 数据类型
router.post('/getList',bdz_dataController.getBdz); //查询总列表 自带分页和条件查询
router.post('/addList', bdz_dataController.createBdz); //新增变电站
router.get('/delList', bdz_dataController.deleteBdz); //删除变电站
router.get('/checkName', bdz_dataController.checkBdzName); //查询变电站名称列表

module.exports = router