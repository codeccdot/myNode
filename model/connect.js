const {bd_eqlist} = require("./bd_eqList")
const {bd_eqTem} = require("./bd_eqTem")

// 关联表id
bd_eqTem.hasOne(bd_eqlist, {foreignKey: 'eq_id', sourceKey: 'id'})
bd_eqlist.belongsTo(bd_eqTem, {foreignKey: 'eq_id', targetKey: 'id'})