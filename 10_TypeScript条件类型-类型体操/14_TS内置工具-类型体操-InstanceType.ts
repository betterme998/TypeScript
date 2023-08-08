// InstanceType<Type>
// .用于构造一个由所有Type的构造函数的实例类型组成的类型

class Person {}

const p1:Person = new Person()
const p2 = new Person()

// 另一种方法
// typeof Person:构造函数具体的类型
// 先获取一个构造器 Person类型，返回构造器创建的实例的类型
type HYPerson = InstanceType<typeof Person>
const p3:HYPerson = new Person()

// 构造函数例子
// 通常用来创建实例的工具函数时会用到InstanceType，平常开发很少用
function factory<T extends new (...arg:any[]) => any>(ctor:T):InstanceType<T>{
  return new ctor()
}

const p4 = factory(Person)



// 类型体操
// 1.确保传入的是构造器
type HYInstanceType<T extends new (...args:any[]) => any> = T extends new (...args:any[]) => infer R?  R:never
type p5 = HYInstanceType<typeof Person>
