interface ILength {
  length:number
}


// 1.根据getLength没有必要用泛型
function getLength(arg:ILength) {
  return arg.length
}

getLength("aaa")
getLength(["aaa","bbb"])

// 2.获取传入的内容，这个内容必须有length属性
// 对泛型就行约束必须继承约束类型
function getInfo<Type extends ILength>(args:Type) :Type{
  return args
}

const info1 = getInfo("aaa")
const info2 = getInfo(["aaa","bbb"])
// const info3 = getInfo(12)  //报错
