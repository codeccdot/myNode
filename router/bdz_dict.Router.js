const Router = require('koa-router');
const  bzd_dictController = require('../controller/bzd_dictController');
const router = new Router()


router.prefix('/bdz_dict')   //设备模板结构数据目录


//变电站具体设备接口 功能 数据类型
router.get('/getList', bzd_dictController.getDict); //查询总列表 树形结构
// router.post('/addList', bdz_eqController.addEq); //新增变电设备模板
// router.get('/delList', bdz_eqController.deleteEq); //删除变电站


module.exports = router