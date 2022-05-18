/**
 * @api {方法} 路径 标题
 * @apiGroup 示例
 * @apiDescription 描述这个API的信息
 *
 * @apiParam {String} userName 用户名
 * @apiParamExample {json} request-example
 * {
 *  "userName": "Eve"
 * }
 *
 * @apiError {String} message 错误信息
 * @apiErrorExample  {json} error-example
 * {
 *   "message": "用户名不存在"
 * }
 * 
 * 
 * @apiSuccess {String} userName 用户名
 * @apiSuccess {String} createTime 创建时间
 * @apiSuccess {String} updateTime 更新时间
 * @apiSuccessExample  {json} success-example
 * {
 *   "userName": "Eve",
 *   "createTime": "1568901681"
 *   "updateTime": "1568901681"
 * }
 */