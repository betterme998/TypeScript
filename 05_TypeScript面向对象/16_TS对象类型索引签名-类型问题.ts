interface IIndexType {
  // 返回值类型的目的是告知通过索引去获取的值是什么类型
  // 签名索引 index 的类型只允许是 number 或者 string 中其中一个
  // [index:number]:string
  // [index:string]:any
  [index:string]:string
}

// 索引签名：[index:number]:string 符合
// const names :IIndexType = ["abc","scs"]

// 索引签名：[index:string]:any 符合
// 当索引是数字时name[0],javascript会转换成字符串name["0"]
// 1.索引要求必须是字符串类型 name[0] === name["0"]
// const names :IIndexType = ["abc","scs"]

// 索引签名：[index:string]:string 会报错
// 严格字面量赋值检测 ["abc","scs"] => Array实例 可以通过names[0]访问。也可以通过names.forEach

const names :IIndexType = ["abc","abc","nba"]
// names["forEach"] => function, 所以访问是符合字符串类型，但是返回值不符合