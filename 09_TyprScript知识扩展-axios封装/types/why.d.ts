
declare module "lodash" {
  export function join(...args: any[]):any
}
type IDType = number | string

// 需要编写类型声明
// 为自己的变量定义类型声明
declare const whyName: string

declare class Person {
  constructor(public name:string,public age:number)
}

// 作为一个第三方库为其他开发者提供类型声明文件 

// 声明文件模块
declare module "*.jpg"

declare module "*.vue"