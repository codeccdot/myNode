const bdz_dataService = require("../service/bdz_dataService");
const Url = require("url"); //url解析器

module.exports = {
  // 查询变电站列表 带分页 可查询 
  getBdz: async (ctx, next) => {
    let body = ctx.request.body;
    let name;
    if(body.name!==undefined){
      name = body.name
    }
    let pageNum = body.pageNum;
    let pageSize = body.pageSize;
    if(pageNum===undefined||pageSize===undefined){
      ctx.body = {
        code: 304,
        msg: "无合法参数",
      };
      return
    }
    ctx.type = "json";
    let res;
    try {
      res = await bdz_dataService.getBdz(pageNum, pageSize,name?name:"");
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: "无法获取数据",
        msg: err,
      };
    }
    if (res == null) {
      ctx.body = {
        code: 402,
        msg: "无数据",
      };
      return;
    }
    ctx.body = {
      code: 200,
      total: res.count,
      pageNum : pageNum ,
      pageSize: pageSize,
      msg: "获取数据成功",
      data: res.rows,
    };
  },

  // 新增变电站
  createBdz: async (ctx, next) => {
    let createList = ctx.request.body;
    createList.is_ok = 0
    createList.ars_state = 0
    createList.user = "默认",
    createList.state = 0
    // createList.model_count = 0
    let res;
    try {
      res = bdz_dataService.createBdz(createList);
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: "添加失败",
        msg: err,
      };
    }
    let res_data = await res;
    console.log(res)
    ctx.body = {
      code: 200,
      msg: "添加成功",
    };
  },

  // 删除变电站
  deleteBdz: async (ctx, next) => {
    const newUrl = Url.parse(ctx.url, true);
    let id = newUrl.query.id;
    if (id === undefined) {
      ctx.body = {
        code: 301,
        msg: "id值不能为空",
      };
      return;
    }
    const res = await bdz_dataService.deleteBdz(id);
    console.log(res);
    if (res === 1) {
      ctx.body = {
        code: 200,
        msg: "删除成功!",
      };
    } else {
      ctx.body = {
        code: 301,
        msg: "删除失败!没找到该id的数据",
      };
    }
  },

  // //条件查找变电站列表数据
  // checkBdz: async (ctx, next) => {
  //   let Query = ctx.request.body;
  //   let name = Query.name; //通过变电站名称
  //   let res = await bdz_dataService.checkBdz(name);
  //   console.log(res);
  // },

  //查询变电站名字列表
  checkBdzName: async (ctx, next) => {
    let res = await bdz_dataService.checkBdzName();
    ctx.body = {
      code: 200,
      msg: "获取列表成功",
      list: res,
    };
  },
};
