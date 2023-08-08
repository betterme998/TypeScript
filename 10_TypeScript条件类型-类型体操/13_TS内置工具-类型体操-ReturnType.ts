// ReturnType<Type>
// 用于构造一个含有Type函数的返回值的类型

type CalcFnType = (num1:number,num2:number) => number

function foo() {
  return "abc"
}

// 泛型工具ReturnType：获取一个 函数 的返回值类型
type CalcReturnType = ReturnType<CalcFnType>
type FooReturnType = ReturnType<typeof foo>


// 总结类型体操题目：自己封装一个ReturnType工具果
type MyReturnType<T extends (...args:any[]) => any> = T extends (...args: any[]) => infer R? R:never

// 封装一个推断参数工具
//  我们通过条件类型，再通过infer关键字 推断出true分支参数类型结果
type MyParameterType<T extends (...args:any[]) => any> = T extends (...args: infer A) => any? A:never


// 自己封装的 推断出是string类型
type FooMyReturnType = MyReturnType<typeof foo>
type CalcParameterType = MyParameterType<CalcFnType>