// 定义枚举类型
enum Direction {
  UP,
  DOWN,
  LEFT,
  EIGHT
}
const d1:Direction = Direction.UP

function turnDirection(direction:Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("向左移动");
      break;
    case Direction.EIGHT:
      console.log("向右移动");
      break;
  }
}

// 监听键盘的点击
turnDirection(Direction.LEFT)
export{}