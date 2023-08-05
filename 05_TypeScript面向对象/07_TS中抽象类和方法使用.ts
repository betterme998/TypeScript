
// 多个子类可能有共同的行为，我们希望把共同行为放到父类里面，父类里面不想有具体的实现，就可以把行为写成抽象方法，抽象方法必须放到抽象里面，之后让子类继承并实现该方法
// 然后通过通用函数传入抽象类，调用方法就可以啦
// 定义抽象类
abstract class Shape {
  // getArea方法只有声明没有实现体
  // 实现体让之类自己实现
  // 就可以将getArea方法定义为抽象方法 ：在方法签名加abstract
  // 抽象方法必须出现在抽象类中，类前面也需要加abstract
  abstract getArea() 
}

// 使用继承的方式
class Rectangle extends Shape {
  // 计算矩形面积
  constructor(public width: number,public height: number){
    super()
  }

  // 抽象类中的抽象方法，子类必须实现
  getArea(){
    return this.width * this.height
  }

}
// 使用继承的方式
class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  // 抽象类中的抽象方法，子类必须实现
  getArea() {
    return this.radius ** 2 * Math.PI
  }
}

class Triangle extends Shape {
  constructor(public width:number,public height:number){
    super()
  }
  // 抽象类中的抽象方法，子类必须实现
  getArea() {
    return this.width * this.height / 2
  }

}

// 通用函数 计算面积并返回
// 当需要计算的形状多之后如三角形，平行四边形等，可以使用继承的方式,参数就可以传入父类，不要再一个一个写
// 该方法传入父类：父类引入指向子类对象 =》 多态
function claceArea(shape:Shape) {
  return shape.getArea()
}

claceArea(new Rectangle(10,20))
claceArea(new Circle(5))
claceArea(new Triangle(5,6))

// 抽象类不能被实例化
// claceArea(new Shape()) 报错

// 抽象类特点
// 1.抽象类不能被实例化
// 2.抽象类可以包含抽象方法，也可以包含实现体方法
// 3.有抽象方法的类，必须是一个抽象类
// 4..抽象方法必须被子类实现，否则该方法必须是一个抽象类

