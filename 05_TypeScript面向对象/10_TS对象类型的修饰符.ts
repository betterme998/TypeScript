// 定义对象类型
type IPerson = {
  // 属性?：可选的属性
  name?:string
  // readonly :只读属性
  readonly age:number
}

interface IKun {
  name:string
  slogan:string
}

const p:IPerson = {
  name:"why",
  age:18
}
// p.age = 19 //报错 只读属性