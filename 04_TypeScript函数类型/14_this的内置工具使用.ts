function foo(this: {name:string}, info:{name:string}) {
  console.log(this,info);
  
}
// 通过typeof 拿到foo函数类型

// type FooType = (this:{name:string},info:{name:string}) => void
type FooType = typeof foo

// 1. ThisParameterType：获取FooType类型中this的类型 <>泛型写法
// 使用ThisParameterType工具
type FoothisType = ThisParameterType<FooType>

// 2.OmitThisParameter :删除this参数类型，剩余的函数类型
type PureFooType = OmitThisParameter<FooType>

// 3.ThisType :
// 它被用作标记一个上下文的this类型
interface IState {
  name:string
  age:number
}
interface IStore{
  state:IState
  eating:() => void
  running:() => void
}
// 使用交叉类型 用thistype绑定上下文this类型
const store: IStore & ThisType<IState> = {
  state:{
    name:"why",
    age:18
  },
  eating:function(){
    console.log(this.name);
    
  },
  running:function(){
    console.log(this.name);
    
  }
}




export{}