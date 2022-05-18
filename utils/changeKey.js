function changeKey(array,keyMap){
 /**/
 //旧key到新key的映射
//  var keyMap = {
//    // id: "value",
//    name: "label",
//    age: "value"
//  };
 for (var i = 0; i < array.length; i++) {
   var obj =  array[i];
   for (var key in obj) {
     var newKey = keyMap[key];
     if (newKey) {
       obj[newKey] = obj[key];
       delete obj[key];
     }
   }
 }
//  console.log(array)
 return array
}
function findValue(data,key,value){
  let obj ;
  for(let i = 0;i<data.length;i++){
      if(data[i][key]==value){
         obj = Object.assign({},data[i])
      }    
  }
  return obj
}


module.exports={changeKey,findValue}