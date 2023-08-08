// Omit<Type,Keys>
// 用于构造一个类型，它是从Type类型里面过滤了一些属性Keys


interface IKun {
  name:string
  age:number
  slogan?:string
}
type IKun2 = Omit<IKun,"name"|"age">


// 类型体操 实现Pick
type HOmit<T,K extends keyof T> = {
  [P in keyof T as P extends K ? never: P] : T[P]
}
type IKun3 = HOmit<IKun,"name"|"age">