
// y就是一个可选参数
// 可选参数类型是什么？ number | undefined 的联合类型
function foo(x:number,y?:number) {
  // 用可选参数时，需要进行参数缩小
  if (y !== undefined) {
    console.log(y+10);
    
  }

}


// 
foo(10)
export{}