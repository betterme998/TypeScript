
// 一.实际开发者只有进行类型推导时，可能会自动推导出never类型。
// 1.一个函数是死循环
function foo(): never {
  // while(true) {
  //   console.log('---');
    
  // }

  throw new Error("123")
}
foo()

// 2.解析歌词
function parseLyric() {
  return []
}

// 二.封装框架/工具库的时候使用一下never
// 其他时候在扩展工具的时候，对于一些没有处理的case，可以直接报错
function handleMessage(message: string | number |boolean) { //boolean为后面加的
  switch(typeof message){
    case "string":
      console.log(message.length);
      break
    case "number":
      console.log(message);
      break
    // 报错后提醒同事加上处理布尔值的代码
    case "boolean":
      console.log(Number(message));
      break
    default:
      const check: never = message
  }
}

handleMessage("aaa")
handleMessage(123)

// 另外一个同事调用时传入布尔类型，为了确保不报错，添加boolean类型，但是函数本身没有对布尔类型就行处理，而且还不报错，代码不严谨
// 这时switch语法 的default加上 never类型时，再传入boolean类型时就会报错，因为这个值永远不会发生。就知道了要再库里加上boolean类型的处理逻辑
handleMessage(true)