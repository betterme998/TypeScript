
type MapIPerson<Type> = {
  // 在映射时加上?号，变成可选属性
  // 加上readonly只读属性
  // 可以在修饰符前加上 + or - 号代表：添加或删除该修饰符
  -readonly [Property in keyof Type]+?:Type[Property]
}

interface IPerson {
  name:string
  age:number
  height:number
  adderss:string
}

// 拷贝的过程可能对原来的进行转变
type IPersonOptional = MapIPerson<IPerson>


export{}