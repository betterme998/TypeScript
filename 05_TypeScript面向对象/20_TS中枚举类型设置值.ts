// enum Direction {
//   LEFT = 100,//枚举类型为数字，后面的值会依次递增
//   RIGHT //101
// }

enum Direction{
  LEFT = "left",
  RIGHT = "right"
}

enum Operation {
  // << 位移位 
  Read = 1 << 0,
  Weite = 1 << 1,
  foo = 1 << 2
}

const d1: Direction = Direction.LEFT

export {}