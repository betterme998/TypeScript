interface IKun {
  name:string
  age:number
  slogan:string

  playBasketball:() => void
}

interface IRun {
  running: () => void
}

const ikun: IKun = {
  name:"why",
  age:18,
  slogan:"你干嘛",
  playBasketball:function(){}
}
// 作用：接口被类实现
class Person implements IKun,IRun {
  name:string
  age:number
  slogan:string

  playBasketball() {

  }
  running() {

  }
}
const ikun2 = new Person()
// ikun2拥有ikun的所有属性
console.log(ikun2.name);
ikun2.running()
ikun2.playBasketball()


export{}

// 抽象类和接口区别
//   .抽象类在很大程度上和接口会有点类似：都可以在其中定义一个方法，让子类或实现类来实现对应的方式
//   .抽象类和接口区别：
//     .抽象类是事物的抽象，抽象类用来捕捉子类的通用特性，接口通常是一些行为的描述
//     .抽象类通常用于一系列关系紧密的类之间，接口只是用来描述一个类应该具有什么行为
//     .接口可以被多层实现，而抽象类只能单一继承
//     .抽象类中可以有实现体，接口中只能有函数的声明

// 通常我们会这样描述抽象类,和接口之间的关系
  // .抽象类是对事物的抽象.表达的是is a的关系.猫是一种动物(动物就是可以定义成一个抽象类)
  // .接口是对行为的抽象.表达的是 has a 的关系.猫拥有跑(可以定义一个单独的接口).爬树(可以定义一个单独的接口)的行为