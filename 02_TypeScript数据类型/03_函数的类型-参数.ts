// 在定义一个typescript中的函数时,都要声明指定的参数类型
// 函数返回时会进行类型推导
function sum(num1: number, num2: number) {
  return num1 + num2
}

const res = sum(123,123)

export{}