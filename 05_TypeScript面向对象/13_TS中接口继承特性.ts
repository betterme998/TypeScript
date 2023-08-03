interface IPerson {
  name:string
  age:number
}


// 可以从其他接口中继承过来属性
// 1.减少了相同代码的编写
// 2.如果使用第三方库，给我们定义了一些属性，自定义一个接口，同时希望自定义接口拥有第三方库某个类型中所有属性
// 可以使用继承来完成
interface IKun extends IPerson{
  slogan:string
}

const ikun:IKun = {
  name:"why",
  age:18,
  slogan:"你干嘛，哎呀"
}

export{}