
interface IIndexType {
  // 索引签名 :可以通过数组索引访问的值
  // [aaa:number]:any
  // 可以通过字符串索引访问的值
  [bbb:string]:any
}

const nums: IIndexType = ["aba","asd","we"]
// 通过数字类型访问索引时，最终都是转化成string类型访问
console.log(nums[0]);


const info: IIndexType = {name:"why",age:18}
console.log(info["name"]);





export{}