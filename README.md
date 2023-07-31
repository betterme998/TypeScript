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