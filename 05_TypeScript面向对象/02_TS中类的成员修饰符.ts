// .public修饰的是任何地方可见，公有的属性或方法，默认编写的属性就是public
// .private修饰的是仅在同一类中可见，私有的属性或方法
// .protected修饰的是仅在类自身及子类中可见，受保护的属性或方法
class Person {
  // 添加修饰符 public 所有地方可以访问
  public name:string

  // 添加修饰符 protected 受保护的，在类和子类中能访问
  protected age:number

  constructor(name:string,age:number) {
    this.name = name
    this.age = age
  }
  // 添加修饰符 private 方法变成私有方法：在类的内部才能访问
  private eating(){
    console.log('吃东西');
    
  }
}
const p = new Person("why",18)
p.name = "koke"

// 不能访问 因为protected修饰符
// console.log(p.age);


// eating为私有方法这里不能访问
// p.eating()

// 子类中是否可以访问
class Student extends Person {
  constructor(name:string, age: number) {
    super(name,age)
  }
  studying() {
    // 可以访问
    console.log("xue xi",this.age);
    
  }
}

const stu = new Student("why",18)
// stu.age 不能访问
// stu.eating 不能访问

export{}