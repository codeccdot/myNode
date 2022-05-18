  生成api文件  apidoc -i apiData/  -o apiDoc
  启动node     node app.js
  已部署静态 
  通过koa2body上传文件
  
  koa body上传回调
    // 如果有文件上传执行
    // if (ctx.request.files) {
    //   let fileList = ctx.request.files; 
    //     let msg_str = []; //上传文件回调信息
    //     let num = 0;
    //     for (let key in fileList) {
    //       let name01 = fileList[key].name; //获取文件名
    //       let path01 = fileList[key].path; //获取存储文件路径 
    //       let ext = name01.split(".");
    //       let backName = ext[ext.length - 1]; //获取文件后缀
    //       let size = (fileList[key].size / 1024 / 1024).toFixed(3) + "M"; //文件大小
    //       let fileAttr = {
    //         name: name01,
    //         backName: backName,
    //         size: size,
    //         path: path01,
    //       };
    //       num++;
    //       msg_str.push(fileAttr);
    //       console.log(`上传文件${num}:`, fileAttr);
    //     }
    //     console.log(`上传完成!一共上传${num}个文件`);
    //   }  