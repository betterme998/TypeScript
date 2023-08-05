
// TypeScript提供了映射类型
/*
.映射类型建立在索引签名的语法上：
    .映射类型就是使用了PropertyKey联合类型的泛型；
    .其中PropertyKeys多是通过keyof创建，然后循环遍历键名创建一个类型
*/ 

// 映射类型不能使用interface定义
type MapPerson<Type> = {
  // 映射类型建立在索引签名的语法上
  // keyof = 拿到传入类型的key的联合类型 "name"|"age"
  // 会依次使用所有key
  [Property in keyof Type]:Type[Property]
}



interface IPerson {
  name:string
  age:number
}

// 使用映射类型 拷贝一份IPerson
type NewPerson = MapPerson<IPerson>

export {}