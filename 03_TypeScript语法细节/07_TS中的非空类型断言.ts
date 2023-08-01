// 定义接口
interface IPerson {
  name: string
  age:number
  friend?:{
    name:string
  }
}

const info:IPerson = {
  name:'why',
  age:18
}
// 当我们不知道有没有这个元素时

//访问属性时 可选链 ?.
console.log(info.friend?.name);

// 属性赋值
// 解决方案一：类型缩小
if (info.friend) {
  info.friend.name = 'kobe'  
}

// 解决方案二:非空类型断言 （有点危险） !告诉ts这一定有值，不用检查
info.friend!.name = "james"
