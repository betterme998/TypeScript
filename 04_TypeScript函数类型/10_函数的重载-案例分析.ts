

// 需求：只能将两个数字/两个字符相加
// 案例分析：any实现
// function add(arg1,arg2) {
//   return arg1 + arg2
// }

// add(10, 20)
// add("abc","mca")

// 在TypeScript中，我们可以编写不同的重载签名 来表示函数可以以不同的方式进行调用
// .一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现

// 3.typescript中重载写法
// 3.1先编写重载签名
function add(arg1:number,arg2:number):number
function add(arg1:string,arg2:string):number
// 3.2编写通用的函数实现
function add(arg1:any,arg2:any):any {
  return arg1 + arg2
}
add(10,20)
add("aa","bb")
// 通用函数不能被调用
// add({name:"why"},"aaa")

// 通用库可能会用，正常一般不用