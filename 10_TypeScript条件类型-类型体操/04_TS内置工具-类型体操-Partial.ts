//Partial<Type>
// 用于构造一个Type下面的所有属性设置为可选类型
interface IKun {
  name:string
  age:number
  slogan?:string
}

// IKun都变成可选的
type IKunOptional = Partial<IKun>

// 类型体操
type HYPartial<T> = {
  // 映射类型
  [P in keyof T]?:T[P]
}

type IKunOptional2 = HYPartial<IKun>

export{}