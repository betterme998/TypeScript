const name = ["abc","cba","nba"]

// 匿名函数是否要添加注解? 最好不要加类型注解
// typescript会根据上下文推导出参数类型,所以不要添加
// 被称为 上下文类型
name.forEach(function(item,index, arr) {

})
export {}