const fs = require("fs")
const path = require("path")

//根据日期写入文件夹
function checkExit01(filePath) { 
    const date = new Date();
    let month = Number.parseInt(date.getMonth()) + 1;
    month = month.toString().length > 1 ? month : `0${month}`;
    const date01 = `${date.getFullYear()}_${month}_${date.getDate()}`;
    const file = path.resolve(__dirname, `../public/uploads/${date01}/${filePath}`);
  // 检查文件是否存在于当前目录中。
    fs.access(file, fs.constants.F_OK, (err) => {
    // console.log(`${file} ${err ? '不存在' : '存在'}`);
    let msg = err ? '不存在' : '存在'
    return msg
  });
 }

//  直接写入文件夹
 function checkExit02 (filePath,msg=''){ 
    const file = path.resolve(__dirname, `../public/uploads/${filePath}`);
  // 检查文件是否存在于当前目录中。
    fs.access(file, fs.constants.F_OK, async(err) => {
    // console.log(`${file} ${err ? '不存在' : '存在'}`);
     msg = err ? '不存在' : '存在'
     return msg
  });
 }

module.exports ={checkExit01,checkExit02}