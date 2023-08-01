type CalcType = (num1:number,num2:number) => number

function calc(calcFn:CalcType) {
  const num1 = 10
  const num2 = 20
  const res = calcFn(num1,num2)
  console.log(res);
  
}
// 2.函数调用

function sum(num1:number,num2:number) {
  return num1 +num2
}
calc(sum)

function mul(num1:number,num2:number) {
  return num1 *num2
}
calc(mul)

// 3.使用匿名函数
// 匿名函数不需要注解，会自动推导出来
calc(function(num1,num2){
  return num1 + num2
})
export{}