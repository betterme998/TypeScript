// 在条件类型中推断
  // .条件类型提供了infer关键字，可以从正在比较的类型中推断类型，然后在true分支里引用该推断结果
  // 比如有一个函数类型，想要获取一个函数的参数类型和返回值类型

type CalcFnType = (num1:number,num2:number) => number

function foo() {
  return "abc"
}

// 获取一个函数的返回值类型
// 泛型工具ReturnType：获取一个 函数 的返回值类型
type CalcReturnType = ReturnType<CalcFnType>
type FooReturnType = ReturnType<typeof foo>


// 总结类型体操题目：自己封装一个ReturnType工具
// 限制泛型传入的是一个函数
// 我们通过条件类型，再通过infer关键字 推断出true分支的结果
type MyReturnType<T extends (...args:any[]) => any> = T extends (...args: any[]) => infer R? R:never

// 封装一个推断参数工具
//  我们通过条件类型，再通过infer关键字 推断出true分支参数类型结果
type MyParameterType<T extends (...args:any[]) => any> = T extends (...args: infer A) => any? A:never


// 自己封装的 推断出是string类型
type FooMyReturnType = MyReturnType<typeof foo>
export{}