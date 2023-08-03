class Person {
  // 下面被省略
  // name:string
  // age:number
  // height:number

  // 当类中属性过多时，一个一个赋值非常繁琐
  // ts提供了语法糖：在参数前加上吸修饰符，可以省略声明阶段
  constructor(public name:string,private age:number, readonly height:number) {
    // 使用了语法糖不要一个一个赋值
  }
  running() {
    console.log(this.age);
    
  }
}

const p = new Person("why",18,1.88)
console.log(p.name,p.height);


export {}