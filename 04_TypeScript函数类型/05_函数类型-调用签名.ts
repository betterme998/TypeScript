
// 1.函数类型表达式
type BarType = (num1:number) => number

// 2.函数的调用签名 （从对象的角度来看这个函数，也可以有其他属性）
// 当我们使用BarType定义类型时，这个函数没有其他属性
// 如果我们想描述一个带有属性的函数，我们可以在一个对象类型中写一个调用签名
interface IBar{
  name:string
  age:number
  // 函数可以调用：函数调用签名 (用:号)
  (num1:number):number
}
const bar: IBar = (num1:number) :number => {
  return 123
}
bar.age = 18
bar(123)

// 开发中如何选择
// 1.如果只是描述函数类型本身（函数可以被调用）,使用函数表达式（function Type Expressions）
// 2.如果在描述函数作为对象可以被调用，同时也有其他属性时，使用函数调用签名（Call Signatures）