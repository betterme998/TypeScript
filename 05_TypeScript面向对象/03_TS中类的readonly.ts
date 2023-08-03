class Preson{
  name:string

  // 添加只读修饰符
  readonly age:number

  constructor(name:string,age:number) {
    this.name = name
    this.age = age
  }
}

// 类和实例之间的关系
const p = new Preson("why",18)
console.log(p.name,p.age);//可读可写

p.name = "kobe"
// p.age = 12 //报错：只读属性不能进行操作

export {}