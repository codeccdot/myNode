const bdz_temService = require("../service/bdz_temService");
let path = require("path");
const fs = require("fs");
const { changeKey, findValue } = require("../utils/changeKey"); //工具函数包
const officegen = require("officegen");
const moment = require("moment")
// var docx = officegen("docx"); //word

module.exports = {
  // 注入模板数据
  insertTem: async (ctx, next) => {
    let data = ctx.request.body;
    let tem_id = JSON.parse(data.data_json).tem_id; //所有tem表关联id
    console.log(data, "具体信息");
    // data不为空时,注入测试数据

    if (Object.keys(data).length !== 0) {
      let Data = JSON.parse(data.data_json);
      //如果字段确定可以用结构
      if (ctx.request.files) {
        let fileList = ctx.request.files;
        let msg_str = []; //上传文件回调信息
        let num = 0;
        let res = ""; //有效回调信息
        let flag = false; //有效上传锁
        for (let key in fileList) {
          let step = key;
          let name01 = fileList[key].name; //获取文件名
          let path01 = fileList[key].path; //获取存储文件路径
          const fileReader = fs.createReadStream(path01); // 读取文件流
          const filePath = path.join(__dirname, `../public/uploads/${key}`); // 组装成绝对路径
          const fileResource = filePath + `/${name01}`;
          let ext = name01.split(".");
          let backName = ext[ext.length - 1]; //获取文件后缀
          let size = (fileList[key].size / 1024 / 1024).toFixed(3) + "M"; //文件大小
          let fileAttr = {
            step: step,
            tem_id: tem_id,
            fileName: name01,
            type: backName,
            size: size,
            path: fileResource,
          };
          num++;
          if (!fs.existsSync(filePath)) {
            fs.mkdir(filePath, (err) => {
              if (err) {
                throw new Error(err);
              } else {
                const writeStream = fs.createWriteStream(fileResource);
                fileReader.pipe(writeStream);
                msg_str.push(fileAttr);
                flag = true;
                console.log(`上传文件${num}:`, fileAttr); //系统上传回调
                let res = bdz_temService.addtemFlies(fileAttr);
                if (res) {
                  ctx.body = {
                    code: 10001,
                    mes: "数据保存成功",
                    data_description:
                      "成功插入一条数据和上传" +
                      num +
                      "个文件,重复文件" +
                      (3 - num) +
                      "个",
                    file_description: msg_str,
                  };
                }
              }
            });
          } else {
            //检测文件是否重复上传
            if (fs.existsSync(fileResource)) {
              console.log("========重复上传" + name01 + "!!!!==========");
            } else {
              const writeStream = fs.createWriteStream(fileResource);
              fileReader.pipe(writeStream);
              msg_str.push(fileAttr);
              console.log(`上传文件${num}:`, fileAttr); //系统上传回调
              flag = true;
              res = await bdz_temService.addtemFlies(fileAttr);
              // console.log(res);
            }
          }
        }
        // 有效文件上传后注入数据
        if (flag == true) {
          try {
            let res = await bdz_temService.insertTem(Data);
            console.log(res, "返回数据");
          } catch (err) {
            console.log(err);
          }
          ctx.body = {
            code: 10001,
            message: "数据保存成功",
            data_description:
              "成功插入一条数据和上传" +
              num +
              "个文件,重复文件" +
              (3 - num) +
              "个",
            file_description: msg_str,
          };
        } else {
          ctx.body = {
            code: 10001,
            message: "重复上传文件",
          };
        }
      }
    } else {
      ctx.body = {
        code: 10020,
        msg: "检测表信息不能为空!",
      };
    }
  },
  getTem: async (ctx, next) => {
    let tem_id = ctx.request.query.id;
    let model_name = await bdz_temService.getModel_name(tem_id);
    let temDetail = await bdz_temService.gettemDetail(tem_id);
    let temCheck = await bdz_temService.gettemCheck(tem_id);
    let temMain = await bdz_temService.gettemMain(tem_id);
    let temFlies = await bdz_temService.gettemFlies(tem_id);
    let keyMap01 = {
      tool_name: "name",
      tool_code: "code",
      check_code: "jyzbh",
      tool_institute: "jydw",
      valid_date: "yxq",
    }; //修改步骤09的字段给前端
    let keyMap02 = {
      fileName: "name",
    };
    temCheck = changeKey(temCheck, keyMap01); //更换前端需要的key
    temFlies = changeKey(temFlies, keyMap02); //更换前端需要的key
    let step6FileList = findValue(temFlies, "step", "file6");
    let step7FileList = findValue(temFlies, "step", "file7");
    let step8FileList = findValue(temFlies, "step", "file8"); //查询对应属性和值对应的对象
    ctx.body = {
      code: 200,
      msg: "获取详情成功",
      data: {
        file6List: step6FileList,
        file7List: step7FileList,
        file8List: step8FileList,
        proName: temMain[0].pro_name,
        position: temMain[0].position,
        modelName: model_name[0].model_name,
        mpJson: temMain[0].mp_json, //铭牌
        step: temDetail[0],
        stepJson: temMain[0].step_json,
        step9List: temCheck,
        tem_id: tem_id,
        result: "",
      },
    };
  },
  //导出word
  importWord: async (ctx, next) => {
    // Create an empty Word object:
    let docx = officegen("docx");

    // Officegen calling this function after finishing to generate the docx document:
    docx.on("finalize", function (written) {
      console.log("Finish to create a Microsoft Word document.");
    });
    // Officegen calling this function to report errors:
    docx.on("error", function (err) {
      console.log(err);
    });

    // Create a new paragraph:
    let pObj = docx.createP();

    pObj.addText("Simple");
    pObj.addText(" with color", { color: "000088" });
    pObj.addText(" and back color.", { color: "00ffff", back: "000088" });

    pObj = docx.createP();

    pObj.addText("Since ");
    pObj.addText("officegen 0.2.12", {
      back: "00ffff",
      shdType: "pct12",
      shdColor: "ff0000",
    }); // Use pattern in the background.
    pObj.addText(" you can do ");
    pObj.addText("more cool ", { highlight: true }); // Highlight!
    pObj.addText("stuff!", { highlight: "darkGreen" }); // Different highlight color.

    pObj = docx.createP();

    pObj.addText("Even add ");
    pObj.addText("external link", { link: "https://github.com" });
    pObj.addText("!");

    pObj = docx.createP();

    pObj.addText("Bold + underline", { bold: true, underline: true });

    pObj = docx.createP({ align: "center" });

    pObj.addText("Center this text", {
      border: "dotted",
      borderSize: 12,
      borderColor: "88CCFF",
    });

    pObj = docx.createP();
    pObj.options.align = "right";

    pObj.addText("Align this text to the right.");

    pObj = docx.createP();

    pObj.addText("Those two lines are in the same paragraph,");
    pObj.addLineBreak();
    pObj.addText("but they are separated by a line break.");

    docx.putPageBreak();

    pObj = docx.createP();

    pObj.addText("Fonts face only.", { font_face: "Arial" });
    pObj.addText(" Fonts face and size.", {
      font_face: "Arial",
      font_size: 40,
    });

    docx.putPageBreak();

    pObj = docx.createP();

    // We can even add images:
    // pObj.addImage('some-image.png')

    // Let's generate the Word document into a file:

    let out = fs.createWriteStream("example.docx");

    out.on("error", function (err) {
      console.log(err);
    });
    console.log(pObj)
    ctx.set( {
                      // 注意这里的type设置，导出不同文件type值不同application/vnd.openxmlformats-officedocument.wordprocessingml.document
                       "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                      'Content-disposition': 'attachment; filename=out' + moment(new Date().getTime()).format('YYYYMMDDhhmmss') + '.docx'
                 });
    ctx.body =  docx.generate(out);
    // Async call to generate the output file:
   
  },
};
