//.在定义接口的时候我们也可以使用泛型
// 在接口名称后加上<Type>
// 泛型指定默认值
interface IKun<Type = string> {
  name:Type
  age:number
  slogan:Type
}

// 传入类型
const kunkun: IKun<string> = {
  name:"why",
  age:18,
  slogan:"哈哈"
}

// 传入数字类型 
const kunkun2: IKun<number> = {
  name:123,
  age:18,
  slogan:145
}
const kunkun3: IKun = {
  name:"why",
  age:18,
  slogan:"哈哈"
}