// let foo: number | string = "132"
// foo = 123

// // 使用的时候要特别小心 （类型缩小 操作）
// if (typeof foo === "string") {
//   console.log(foo.length);
// }

// 2.例子：打印id
function printID(id: number | string) {
  console.log("您的id",id);

  // 类型缩小
  if (typeof id === "string") {
    console.log(id.length);
  }else{
    console.log(id);
    
  }
  
}
printID("123")
printID(123)


export {}