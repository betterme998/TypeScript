// Pick<Type,Keys>
// 用于构造一个类型，它是从type类型里挑了一些属性Keys


interface IKun {
  name:string
  age:number
  slogan?:string
}
type IKun2 = Pick<IKun,"name"|"age">


// 类型体操 实现Pick
type HRecord<T,K extends keyof T> = {
  [P in K] : T[P]
}
type IKun3 = HRecord<IKun,"name"|"age">



export{}
