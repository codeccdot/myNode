modules.export = {
//清空对象中的属性值    
clearValue(obj){
    Object.keys(obj).forEach(key => {
        if (typeof obj[key]=='object'){
            this.clearValue(obj[key])
        }else {
            obj[key]='';
        }
    });
}

}