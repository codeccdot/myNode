// const { from } = require("responselike")

// function sort(arr){
//     arr.sort(function(a,b){
//     return a-b
//     })
// }
// function unique(arr){
//    let res = Array.from(new Set(arr))
//    return res
// }

// function flat(arr){
//     const a = arr.map(item =>{
//        if(Array.isArray(item)){
//          return  flat(item)
//        }
//         return [item]   
//     })
//     return [].concat(...a)
// }
// let arr = [1,2,34,5,[3,4,5,6]]
// let res = flat(arr)
// sort(res)
// unique(res)
// console.log(res)



// Array.prototype.flat = function(){
//     const result = this.map(()=>{
//         if(Array.isArray(item)){

//         }
//     })
// }

// let a ={
//     name:"1231",
//     change:{name:"12",class:"1211"}
// }
// let obj = JSON.parse(JSON.stringify(a)) 
// let res1= Object.entries(obj.change)
// console.log(res1)

// let c= "cctv.js.1js"
// function reverse(string){
//     let ext = string.split('.');
//     return ext = ext[ext.length - 1]
// }
// console.log(reverse(c))


// ~function(){
//     /**/
//     var Arrydata = [{name:'Lily',age:18},{name:'BKqq',age:22}]
//     //旧key到新key的映射
//     var keyMap = {
//       // id: "value",
//       name: "label",
//       age: "value"
//     };

//     for (var i = 0; i < Arrydata.length; i++) {
//       var obj = Arrydata[i];
//       for (var key in obj) {
//         var newKey = keyMap[key];
//         if (newKey) {
//           obj[newKey] = obj[key];
//           delete obj[key];
//         }
//       }
//     }
//     console.log(Arrydata,'修改后数组对象---')
// }()

let data = [
  {name:"12",age:"123",pen:"12"},
{name:"13",age:"123",pen:"12"},
{name:"14",age:"123",pen:"12"}]


function findValue(data,key,value){
  let obj ;
  for(let i = 0;i<data.length;i++){
      if(data[i][key]==value){
         obj = Object.assign({},data[i])
      }    
  }
  return obj
}
 let res =  findValue(data,"name",13)
 console.log(res)
