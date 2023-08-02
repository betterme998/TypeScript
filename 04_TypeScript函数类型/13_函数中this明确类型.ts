// 在设置配置选项（编译选项comilerOptions,noImplicitThis设置为true时 不允许模糊this）

// 在设置了noImplicitThis为true时，TypeScript会根据上下文推导this，但是在不能正确推导时，就会报错，我们需要明确指定this

// 指定this的类型
// 在开启noImplicitThis的情况下，我们必须指定this的类型
// 如何指定？函数的第一个参数类型：
  // .函数的第一个参数我们可以根据该函数之后被调用的情况，用于声明this的类型（名词必须叫this）
  // .在后续调用函数传入参数时，从第二个参数开始传递，this参数会在编译后被抹除


  // 2.普通的函数
  function foo(this: {name: string},info:{name:string}) {
    console.log(this);
  }

  // 第一个参数绑定this
  foo.call({name:"why"},{name:"kobe"})


export{}