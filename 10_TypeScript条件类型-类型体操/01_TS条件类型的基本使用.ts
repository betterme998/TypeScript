type IDType = number | string

// 判断number是否是extendsIDType
type ResType =number extends IDType ? true:false

// 举个例子：函数的重载
// function sum(num1:number,num2:number):number
// function sum(num1:string,num2:string):string
// function sum (num1,num2) {
//   return num1+ num2
// }

// 把上面代码写成一行
// 加上看条件类型
function sum<T extends number | string>(num1:T,num2:T): T extends number? number:string
function sum(num1,num2) {
  return num1 +num2
}
const res = sum(10,2)




