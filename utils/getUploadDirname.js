 /**
 * @description checkDirExist 判断文件夹是否存在 如果不存在则创建文件夹
 *  @description  getUploadDirName 生成文件名称
 * @description  getUploadFileExt getUploadFileExt
 */
  const path = require('path');
  const fs = require('fs');

function getUploadDirName(){
    const date = new Date();
    let month = Number.parseInt(date.getMonth()) + 1;
    month = month.toString().length > 1 ? month : `0${month}`;
    const dir = `${date.getFullYear()}_${month}_${date.getDate()}`;
    return dir;
  }

function checkDirExist(Path) {
  if (!fs.existsSync(Path)) {
    fs.mkdirSync(Path);
  }
}
function getUploadFileExt(name) {
    let ext = name.split('.');
    return ext[ext.length - 1];
  }
  
getUploadFileExt;

  
module.exports = {getUploadDirName,checkDirExist,getUploadFileExt};