
const names = ["abc","scv","aas"]

// 这里接收一个函数,返回类型为void,但是return并没有报错,因为这是是上下文推导出的void类型
// 基于上下文推导,推导出返回类型为viod的时候,并不会强制函数一定不能返回
names.forEach((item,index,arr)=>{
  return 123
})

export{}