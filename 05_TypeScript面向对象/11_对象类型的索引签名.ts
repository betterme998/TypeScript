// interface IPerson {
//   name:string
//   age:number
//   height:number
// }


// 1.索引签名理解
// interface InfoType{
//   // 索引签名：可以通过字符串索引，去获取到一个值，也是字符串
//   [key:string]:string
//   length:number
// }

// // 假设这是某个库的源码，我们不知道里面有什么属性
// function geInfo():InfoType {
//   const abc:any ="hahaha"
//   return abc
// }

// // 
// const info = geInfo()
// const name = info["name"]
// console.log(name);

// 2.索引签名案例
interface ICollection {
  [index:number]:string
  length:number
}
function printCollection(collection:ICollection) {
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    console.log(element.length);
    
  }
}

const names = ["abc","vd","ee"]
const tuple: [string,string] = ["why","观点"]
printCollection(names)
printCollection(tuple)
export{}