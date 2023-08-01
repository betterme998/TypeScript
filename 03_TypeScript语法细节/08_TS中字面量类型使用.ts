// 1.字面量类型基本使用
const name = "why"
let age: 19 = 19

// 2.将多个字面量类型联合起来
type Direction = "left" | "right" | "ip" | "down"

// 例子：封装请求方法,可以使用字面量类型来指定请求方式
function request(url:string,method:"get" | "post"){

}

request("http://codercba.com/api/aaa","get")

// ts细节
// const info = {
//   url:"xxx",
//   method:"post"
// }

// 下面的做法是错误的·：info.method获取的是string类型
// request(info.url,info.method)

// 解决方案一：info.method进行类型断言
// request(info.url,info.method as "post")

// 解决方案二：直接让info对象类型是一个字面量类型

const info2 = {
  url:"xxx",
  method:"post"
} as const
request(info2.url,info2.method)
export{}