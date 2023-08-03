
interface IIndexType {
  // 两个索引类型的写法
  // [index: number] :string
  // [key: string] :any

  // 要求一： 下面的写法不允许：数字类型索引的类型，必须是字符串类型索引的类型的 子类型（字符串类型要包 含数 字类型 ）
  // 原因： 所有的数字类型会转成字符串类型去对象中获取内容
  // 数字0 ：number| string ,当我们通过数字类型number拿到的内容，会和string拿到的结果矛盾，所以不行
  // 数字"0" ：string
  // [index: number] :string | number
  // [key: string] :string

  // 数字0 ： string ,通过数字number拿到的结果，不会和string矛盾 （通过数字拿到的是string类型--通过string类型拿到 number或者string 类型）
  // 数字"0" ：number| string


  
// 要求二：如果索引签名中有定义其他属性，其他属性返回的类型，必须符合string类型返回属性
  [index: number] :string
  [key: string] :any

}
// 结论：数字类型必须是比字符串类型更加确定的类型（需要是字符串类型的子类型）

// const names:IIndexType = ["abc","asd","sd"]
// const item1 = names[0]
// const forEachFn = names["forFach"]
export{}