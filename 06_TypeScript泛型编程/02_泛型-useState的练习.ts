
// 类型参数化 函数后面加<Type>,并在类型位置使用
function useState<Type>(initialState:Type):[Type, (newState:Type) => void]{
  let state = initialState
  function setState(newState) {
    state = newState
  }

  return [state,setState]
}

// 初始化count
const [count,setState] = useState(100)
const [message,setMessage] = useState("kkk")

// 泛型的基本补充
// .可以传入多个类型
  function foo<T,E>(a1:T,a2:E) {
    
  }