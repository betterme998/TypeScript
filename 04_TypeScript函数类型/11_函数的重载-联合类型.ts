
// 1.普通实现
// function getlength(arg) {
//   return arg.length
// }

// 2.函数的重载
// function getlength(arg:string): number
// function getlength(arg:any[]): number
// function getlength(arg) {
//     return arg.length
// }

// 3.联合类型实现
// function getlength(arg: string | any[]) {
//   return arg.length
// }

// 在开发中能用联合类型和函数重载完成的 选联合类型

// 4.对象类型实现
function getlength(arg: {length: number}) {
  return arg.length
}

getlength("aaaa")
getlength(["a","b"])
