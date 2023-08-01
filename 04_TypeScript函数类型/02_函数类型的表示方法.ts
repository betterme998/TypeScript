// 方案一：函数类型表达式
// 格式：(参数) => 返回值
// 注意，某些语言中，可能参数名称num1和num2是可以省略，但是typescript是不可以的
type barType = (num1:number) => number
const  bar:barType = (arg: number):number =>{
  return 123
}

export{}