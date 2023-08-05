type MapPerson<Type> = {
  // // 可以在修饰符前加上 + or - 号代表：添加或删除该修饰符
  -readonly [Property in keyof Type]-?:Type[Property]
}

interface IPerson {
  name:string
  age?:number
  readonly height:number
  address?:string
}

type IPersonOptional = MapPerson<IPerson>

// const p:IPersonOptional = {

// }