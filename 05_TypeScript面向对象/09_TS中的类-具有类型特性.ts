class Person {

}

/*
类的作业
  1.可以创建类对应的实例对象
  2.类本身可以作为这个实例的类型
  3.类也可以当作一个有构造签名的函数
*/ 

const p:Person = new Person()


function factory(ctor: new () => void) {

}
// 类也可以当作一个有构造签名的函数
factory(Person)

export{}