class Person {
  // ts中如果有成员属性就必须先声明
  // 成员属性：声明成员属性
  // 或者声明时初始化
  name =''
  age=0

  // 不想初始化时 使用 !:
  // name!:string

  // constructor里面初始化
  constructor(name:string, age:number) {
    this.name = name
    this.age = age  
  }

  eating() {
    // z这里的this会被推倒出类型
    console.log(this.name);
    
  }
  running() {

  }
}

// 实例对象:instance
const p1 = new Person("why",18)
const p2 = new Person("kobe",30)