# TypeScript
# typeScript的编译环境
  typeScript最终会被编译成javascript来运行，所以需要搭建环境
    .我们需要在电脑上安装typeScript，这样就可以通过TypeScript的Compiler将其编译成javascript

    1.全局安装
      npm install typescript -g

    查看版本
      tsc --version
  浏览器不能直接运行ts
  简化ts转换js
    方式一：通过webpack，配置本地的typescript编译环境和开启一个本地服务，可以直接运行在浏览器上
    方式er：通过ts-node库，为typescript的运行提供执行环境

      方式一：webpack配置
        .https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw

      方式二: 安装ts-node
        npm install ts-node -g

        .另外ts-node需要依赖tslib和@types/node两个包：
          npm install tslib @types/node -g
        
        .现在可直接通过ts-node来运行typescript代码
          ts-node math.ts
  
# 变量的声明
  .在typescript中定义变量需要指定 标识符 的类型
  .完整的声明格式如下：
    .声明了类型后typescript就会进行 类型检测，声明的类型可以称之为 类型注解（type Annotation）
      var/let/const 标识符: 数据类型 = 赋值; 
      .注意：这里的string是小写的，和String是有区别的
        string是typescript中定义的字符串类型，String是ECMAScript中的一个类
      例子：let message: string = "Hello World"

# 变量的类型推导（推断）
  .在第一次变量赋值时，会根据后面的赋值类型，来推断出变量的类型

# javascript类型 -number类型
  .typescript和JavaScript不区分整数，浮点数，统一为number类型
# javascript类型 -boolean类型
  .boolean类型只有两个取值：true和false，非常简单
# javascript类型 -string类型
  .字符串类型，可以使用单引号或双引号，也支持es6的模板字符串来拼接变量和字符串
# javascript类型 -Array类型


# 匿名函数参数

# 对象类型

# TypeScript类型 - any类型
  .在某些情况下.我们无法确定一个变量的类型,并且可能会发生一些变化,这个时候可以使用any类型

# TypeScript类型 - unknown类型
  .unknown是TypeScript中比较特殊的一种类型,它用于描述类型不确定的变量
    .和any类型类似,但是unknown类型的值上做任何事情都是不合法的
    .必须要继续校验(缩小),后进行操作

# TypeScript类型 - void类型
  .void通常同来指定一个函数是没有返回值的,那么它的返回值就是void类型

  .注意:我们可以将undefined赋值给void类型,也就是函数可以返回undefined

# TypeScript类型 - never类型
  never的应用场景:
  1.开发中很少实际去定义never类型
  *某些情况会自动进行类型推导出never

  2.开发框架（工具）时可能会用到never

  3.封装一些类型工具的时候，可以使用never
  *类型体操的题目：never

  .never表示永远不会发生值的类型，比如一个函数
    .如果一个函数中是死循环或者抛出一个异常，那么这个函数会返回东西吗？
    .不会，那么写viod类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型

# typescript类型 - tuple类型 （元组类型）
  .tuple和数组有什么区别？
    .1.数组中一般建议存放相同类型的元素，不同类型的元素不推荐放数组中（可以放到对象或者元组中）
    2.元组中每个元素都有自己的类型，根据索引获取的值可确定对应的类型

# 联合类型和交叉类型
  .联合类型
    .typescript 的类型系统允许我们使用多种运算符，从现有类型中构建新类型
      const foo: string|boolean
    

# type和interface使用
  类型别名
    type

  接口的声明
    
  .类型别名和接口声明非常类似，在定义对象类型时，大部分时候，你可以任意选择

  interface和type区别
    interface可以重复对某个接口来定义属性
    type别名不行
    等...

# 类型断言和非空断言
  as
  .有时候TypeScript 无法获取具体的类型，这个我们需要使用类型断言
    .比如通过doucument.getElementById,TypeScript只知道该函数返回HTMLElenemt，但不知道它具体类型；
  
  .typescript只允许类型断言转换为更具体或者不太具体的类型(any/unknown)版本，此规则防止不可能的强制转换

  非空类型断言

# 字面量类型和类型缩小
  常见类型缩小
    typeof
    ===，!==
    instanceof
    in
    等等


# 函数的类型和函数签名
  构造签名
    .js函数可以使用new操作符调用
    构造签名：在调用签名前面加一个关键字 new 

# 函数的重载和this类型

  函数重载：
    .在typescript中

  可推导的this类型
    