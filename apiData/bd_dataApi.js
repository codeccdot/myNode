
/** 1 获取变电列表
 * @api {post} /bdz_data/getList 获取变电列表
 * @apiGroup 变电站列表接口
 * @apiDescription  根据传过来的页码和每页数量获取变电站分页信息
 *
 * *@apiParam {Number} currentPage 当前页码
 * *@apiParam {Number} pageSize 每页数量
 * *@apiParam {Number} name 变电站名称
 * @apiParamExample {json} request-example
 * {
 *  "currentPage": "1",
 *  "pageSize":"4",
 *  "name":""
 * }
 *
 * @apiError {String} message:"获取列表失败"
 * @apiErrorExample  {json} {mes}
 * {
 *   "code":"301",
 *   "message":"获取列表失败"
 * }
 * 
 * 
 * @apiSuccess {String} message:"获取列表成功"
 * @apiSuccessExample  {json} success-example
 * {
 *   "code":"200",
 *   "message":"获取列表成功",
 *    "data":data
 * }
 **/


/**
 * @api {post} /bdz_data/addList 新增变电列表
 * @apiGroup 变电站列表接口
 * @apiDescription  添加变电站信息
 *
 * @apiParam {String} name 变电名称
 
 *
 * @apiError {String} message:"新增失败"
 * @apiErrorExample  {json} {mes}
 * {
 *   "code":"301",
 *   "message":"新增失败"
 * }
 * 
 * 
 * @apiSuccess {String} message:"新增成功"
 * @apiSuccessExample  {json} success-example
 * {
 *   "code":"200",
 *   "message":"新增成功",
 *    "data":data
 * }
 **/


 





