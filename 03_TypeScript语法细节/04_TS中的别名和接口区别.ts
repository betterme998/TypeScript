// 1.区别一：type类型使用范围更广，接口类型只能声明对象


// 2.区别二：在声明对象时，interface可以多次声明
// type 不允许两个相同名称的别名同时存在
// type PoinType1 = {
//   x:number
//   y:number
// }
// type PoinType1 = {
//   x:number
//   y:number
// }

// 2.2 interface可以多次声明同一个接口
interface PoinType1{
  x:number
}
interface PoinType1{
  x:number
  y:number
}

// 3.interface支持继承
interface IPerson {
  name: string
  age:number
}
// 继承IPerson
interface IKun extends IPerson {
  kouhao:string
}

const ikun1 :IKun = {
  kouhao: "你干嘛，哎呦",
  name:"kobe",
  age:30
}

// 4.interface可以被类实现
// class Person implements IPerson{

// }

// 总结：如果是非对象类型的定义使用type，如果是对象类型的声明那么使用interface
export{}