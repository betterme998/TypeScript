// typescript对于传入的函数类型的参数的个数不进行检测
// typescript对传入的参数类型多余的参数会被忽略掉
type ValaType = (num1:number,num2:number) => number
function calc(calcFn:ValaType) {

  // 调用时必须传两个
  calcFn(10,20)

}


// 这里并没有传入参数，而且不会报错，因为typescript对于传入的函数的参数的个数少于需要的参数时会自动忽略 （前提是匿名函数）
calc(function(nim1){
  return 123
})

// 例子
const names = ['abc','vcm']
// forEach接收一个函数，这个函数有三个参数，但我们并不是每个都要用到，所以ts不会对传入的函数类型的参数进行检查
names.forEach(element => {
  
});

// TS对于很多类型检测报不报错，取决于它的内部规则
// 例子：
interface IPerson {
  name: string
  age:number
}

// 当添加另外的类型时，会报错如下
// const info:IPerson = {
//   name:'www',
//   age:123,
//   height:1.88
// }

// 但是换一种写法不报错如
const p = {
  name:'www',
  age:18,
  height:1.88
}
const info:IPerson = p

// 在typescript github issue ，成员 回答了这个问题
// 取决于 这个对象是不是第一次被定义，如果第一次被定义就保存新鲜，必须和类型一致.
// 如果后面对象被赋值给其他东西了，就不新鲜了.不新鲜就不用和类型保持一致

export{}