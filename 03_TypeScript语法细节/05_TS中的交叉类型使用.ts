// 回顾：联合类型
type ID = number | string
const id1:ID = "123"
const id2:ID = 123

// 交叉类型：两种（多种）类型要同时满足
type NewType = number & string //没有意义

interface IKun {
  name:string
  age:number
}
interface ICoder {
  name:string
  coding:() => void
}

// 交叉类型可以把多个对象交叉到一起，变成新的类型
// info既满足IKun 也满足ICoder
const info: IKun & ICoder = {
  name:'why',
  age:18,
  coding:function() {
    console.log("coding");
    
  }
}
export{}