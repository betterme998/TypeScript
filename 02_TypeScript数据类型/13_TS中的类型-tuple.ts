
//  保存我的个人信息：why 18 
// 1.使用数组
// 不合适：数组中最好存放相同的数据类型,获取值之后不能明确的知道对应的数据类型
const info1: any[] = ["why", 18, 1.88]
const value = info1[2]

// 2.使用对象类型(使用最多方法)
const indo2 = {
  name:'why',
  age:18,
  height:1.88
}

// 3.使用元组类型
// 元组数据结构中可以存放不同的数据类型，取出的值也有明确的类型
const info3: [string, number, number] = ['why',18,1.88]
const value2 = info3[2]

// 在函数中使用元组类型是最多的（函数的返回值）
// 返回元组在取值时可以找到对应的类型
function useState(initialState:any):[number,(newValue:number) =>void] {
  let stateValue = initialState
  function setValue(newValue:any) {
    stateValue = newValue
  }
  return [stateValue,setValue]
}
const [count,setCount] = useState(10)