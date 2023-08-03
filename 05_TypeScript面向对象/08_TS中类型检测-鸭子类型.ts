// TypeScript对于类型检测的时候使用的鸭子类型
// 鸭子类型：如果一只鸟，走起路来想鸭子，游起来像鸭子，看起来像鸭子，那你可以认为它就是一只鸭子
// 鸭子类型，只关心属性和行为，不关心你具体是不是对应的类型

class Person {
  constructor(public name:string, public age: number){}
}

class Dog {
  constructor(public name:string, public age: number){}
}

function printPerson(p: Person) {
  console.log(p.name, p.age);
  
}

printPerson(new Person("why",18))

// 没报错因为ts只关心有没有对应的属性和行为：name，age
printPerson({name:"kobe",age:12})// 没有报错 很奇怪
printPerson(new Dog("jj",1))// 没有报错很奇怪

export{}