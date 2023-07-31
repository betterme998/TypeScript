// 在定义一个typescript中的函数时
// 函数返回时会进行类型推导
// 也可以指定返回值类型:在()后面指定
function sum(num1: number, num2: number): number {
  return num1 + num2
}

const res = sum(123,123)

export{}