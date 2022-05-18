function addRoot(list) {
  let copy = JSON.parse(JSON.stringify(list))
  list.map((item)=>{
      for(let i = 0;i<copy.length;i++){
          if(item.rootId == copy[i].id){
                item.rootName = copy[i].dict_name
          }
      }
  })
  return list
}

// let arr = [
//   { id: 1, name: "小白", parentId: 0, rootId: 0 },
//   { id: 2, name: "小白儿子", parentId: 1, rootId: 1 },
//   { id: 3, name: "小白孙子", parentId: 2, rootId: 1 },
//   { id: 4, name: "小红", parentId: 0, rootId: 0 },
//   { id: 5, name: "小红儿子", parentId: 4, rootId: 4 },
//   { id: 6, name: "小红女儿", parentId: 4, rootId: 4 },
// ];
// let b = JSON.parse(JSON.stringify(arr));



function toTree(data, id, list = [], name = "") {
  for (let i of data) {
    if (i.parentId == id) {
      if (name !== "") {
        i.parentName = name;
      }
      list.push(i);
    }
  }
  for (let i of list) {
    i.children = [];
    toTree(data, i.id, i.children, i.dict_name);
  }
  return list;
}

// addRoot(list)
// let res = toTree(arr, 0, []);
// console.log(JSON.stringify(res))

module.exports = {toTree,addRoot};
