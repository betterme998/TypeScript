// 1.理解形参和实例参数化，但是参数的类型写死了，固定了 name:string
// function foo(name:string,age:number) {

// }

// foo("why",19)
// foo("why",30)

// 2.定义函数：将传入的内容返回
// 传入参数的类型不写死，让别人传进来，类型参数化
// 在函数名后加上:bar<Type>  ，<type>是传入的类型
// 在参数后面使用该类型：(arg:Type)
function bar<Type>(arg:Type) {
  return arg
}

// 传入类型
// 完整写法
const res1 = bar<number>(123) 
const res2 =bar<string>("abc")
const res3 =bar<{name:string}>({name:"why"})

// 省略的写法
// 会自动进行类型推导
// 默认自动推导类型会更加具体
const res4 = bar("aaaaaa")
const res5 = bar(111) //被推导成字面量类型，因为类型没有写死，是const常量声明的

