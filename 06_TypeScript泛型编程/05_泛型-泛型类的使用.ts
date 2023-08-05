
// 泛型类
class Point<Type = number> {
  x:Type
  y:Type
  constructor(x:Type,y:Type) {
    this.x = x
    this.y = y
  }
}

// 会进行类型推导,一般不用手动传
const p1 = new Point(10,20)
const p2 = new Point("10","20")

export{}