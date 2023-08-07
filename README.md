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

# this相关的内置工具
  typescript提供一些辅助工具进行类型转换，全局可用
  .ThisParameterType:
    .用于提取一个函数类型Type的this参数类型
    .如果这个函数类型没有this参数返回unknown
  .OmitThisParameter
    .用于移除一个函数类型Type的this参数类型，并且返回当前的函数类型


# TypeScript类的使用
  .使用class关键字定义一个类
  .我们可用声明类的属性：在类的内部声明类的属性以及对应的类型
    .如果类型没有声明，那么它们默认是any的
    .我们也可以给属性设置初始化
    .在默认的strictPropertylnitialzation模式下面我们必须初始化，如果没有初始化编译会报错
      .如果在strictPropertylnitialzation模式下面不希望给属性初始化，可以使用name!:string语法

  类的继承
    使用extends关键字来实现继承，子类中使用super来访问父类

    class Student extends Person {}
    .Student类继承自Person
      .student类可以有自己的属性和方法，并且会继承Person属性和方法
      .构造函数中，我们可以通过super来调用父类的构造方法，对父类中的属性进行初始化

  类的成员修饰符
    .public修饰的是任何地方可见，公有的属性或方法，默认编写的属性就是public
    .private修饰的是仅在同一类中可见，私有的属性或方法
    .protected修饰的是仅在类自身及子类中可见，受保护的属性或方法

    只读属性 readonly

    getter/setter
    .一些私有属性我们是不能直接访问，或者某些属性我们想监听它获取getter和设置setter的过程，这个时候我们可以使用存取器

  参数属性 (Parameter Peoperties)
    .typescript提供了特殊的语法，可以把一个构造函数参数转成一个同名同值的类属性
      .这被称为参数属性
      .在构造函数参数前添加修饰符来创建参数属性，最后这些类属性字段也会得到这些修饰符
# TypeScript中抽象类
  abstract
  .继承是多态使用的前提
    .所以在定义很多通用接口时，我们通常会让调用者传入父类，通过多态来实现更加灵活的调用方式
    .但是，父类本身可能并不需要对某些方法进行具体实现，所以父类中定义的方法，我们可以定义为抽象方法

  类的类型
    .类本身也可以作为一种数据类型的
# TypeScript对象类型
  对象类型的属性修饰符(Property Modifiers)

  索引签名
# TypeScript接口补充
  接口继承

  抽象类和接口区别
  .抽象类在很大程度上和接口会有点类似：都可以在其中定义一个方法，让子类或实现类来实现对应的方式
  .抽象类和接口区别：
    .抽象类是事物的抽象，抽象类用来捕捉子类的通用特性，接口通常是一些行为的描述
    .抽象类通常用于一系列关系紧密的类之间，接口只是用来描述一个类应该具有什么行为
    .接口可以被多层实现，而抽象类只能单一继承
    .抽象类中可以有实现体，接口中只能有函数的声明

# 特殊：严格字面量赋值检测

# TypeScript枚举类型
  .枚举类型是为数不多的typescript特性有的特性之一
    ..枚举就是将一组可能出现的值,一个一个列举出来,定义在一个类型中,这个类型就是枚举类型
    .枚举允许开发者定义一组命名常量,常量可以是数字,字符串类型;


# 泛型语法的基本使用
  认识泛型
    .软件工程的主要目的不仅仅明确和一致的api，还要让你的代码具有很强的重用性
      .比如我们可以通过函数来封装一些API,通过传入不同的函数参数，让函数帮助我们完成不同的操作；
      .但是对于参数的类型是否也可以参数化呢？
  泛型接口
    .在定义接口的时候我们也可以使用泛型

# 泛型接口，类的使用

# 泛型约束和类型条件
  .有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中
    .比如string和array都是有length的，或者某些对象也是会有length属性的
    .那么只要是拥有length的属性都可以作为我们的参数类型，那么应该如何操作呢？

# TypeScript映射类型
  .有时候，一个类型需要基于另外一个类型但是你又不想拷贝一份，这个时候可以考虑使用映射·类型
    .大部分内置工具都是通过映射类型来实现的
    .大多数类型体操的题目也是通过映射类型完成的

  .映射类型建立在索引签名的语法上：
    .映射类型就是使用了PropertyKey联合类型的泛型；
    .其中PropertyKeys多是通过keyof创建，然后循环遍历键名创建一个类型

# TypeScript条件类型
  最难的知识点（和其他知识点结合）
    .很多时候，日常开发中我们需要基于输入的值来决定输出的值，同样我们也需要基于输入的值的类型来决定输出的值的类型
    .条件类型 。就是用来帮助我们描述输入类型和输出类型之间的关系
    .条件类型的写法有点类似于javascript中的条件表达式（三元运算符 xx? a:b）

    


# 类型工具和类型体操

.Typescript是一种支持类型编程的类型系统
.在开发一些框架，库，或通用工具，为了考虑各种适配的情况，就需要使用类型编程



# TypeScript知识扩展

# TypeScript模块使用
  .javascript使用ES Module的格式,这就是我们所知的 import/export语法
  .所以typescript中最主要使用的模块化方案就是ES Module

  非模块
  .我们需要理解TypeScript为什么是一个模块
    .javascript规范声明任何没有export的javascript文件都应该被认为是一个脚本，而非模块
    .在一个脚本文件中，变量和类型会被声明在共享的全局作用域，将多个输入文件合并成一个输入文件，或者在html中使用script标签价值这些文件
  .如果你有一个文件，现在没有任何import或者export，但是你希望它被作为模块处理，添加这行代码 export{}

  .这会把文件改成一个没有导出任何内容的模块，这个语法可以生效

  内置类型导入
    typescript4.5允许单独导入，你需要使用type前缀，表面导入的是一个类型

# TypeScript命名空间

类型查询
  HTMLlmageElement类型来自哪里？甚至document 和 getElementById
  .其实这里涉及到typescript对类型的管理和查询规则

  另外一种typescript文件： .d.ts文件
    .它是用来做类型声明，称之为类型声明或者类型定义文件
    .这种文件不能写逻辑代码，只写类型声明


# 内置声明文件的使用
  内置声明的环境
  .我们通过target和lib来决定哪些内置类型声明是可以使用的：
  .我们可以通过target的编译选项来配置：typescript通过lib根据您的target设置更改默认包含的文件来帮助解决此问题

# 第三方库声明的文件
  外部类型声明通常是我们使用一些库（比如第三方库）时,需要的一些类型声明
  这些库通常有两种声明方式
    方式一：在自己库中进行类型声明（编写.d.ts文件）,比如axios
    方式二：通过社区一个共有库DefinitelyTyped存放类型声明文件
      该库的github地址：https://github.com/DefinitelyTyped/DefinitelyTyped/
      该库查找声明安装方式地址：https://www.typescriptlang.org/dt/search?search=
    三：自己没有声明，DefineTypes库也 没有声明 ：我们就手写声明文件

# 编写自定义声明文件
  什么情况下需要自己来定义声明文件？
    .我们使用第三方库是一个纯的JavaScript库，没有对应的声明文件
    .我们给自己的代码中声明一些类型，方便在其他地方直接使用

    declare声明模块
    .

# tsconfig配置文件解析
  认识tsconfig.json文件
  .当目录中出现tsconfig.json文件，则说明该目录是typescrupt
  .tsconfig.json文件指定了编译项目所需的根目录下文件以及编译选项 （ts文件以什么方式进行编译）
  .tsconfig.json文件有两个作业
    作用一(主要的作用):让Typescript Compiler在编译的时候，知道如何去编译TypeScript代码和进行类型检测
      .比如是否允许不明确this选项，是否允许隐藏式的any类型
      .将TypeScript代码编译成什么版本的JavaScript
    作用二：让编译器（比如VSCode）可以按照正确的方式识别TypeScript代码
      .对于哪些语法进行提示，类型错误检测等等

  tsconfig.json在编译时如何被使用？
    .在调用tsc命令并且没有其他输入文件参数时，编译器将由当前目录开始向父级目录寻找包含tsconfig文件的目录.
    调用tsc命令并且没有其他输入文件参数，可以使用--project（或者只是-p）的命令行选项来指定包含了tsconfig.json的目录
    .当命令行输入指定文件产生，tsconfig.json文件会被忽略

  webpack中使用ts-loader进行打包时，会自动读取tsconfig文件，根据配置编译Typescript代码

  tsconfig.json文件包括哪些选项呢？
    .查看文档：https://www.typescriptlang.org/tsconfig
    .当我们开发项目时选择typescript模板时tsconfig文件会默认帮助我们配置好


<!-- tsconfig.json 文件选项 -->
https://www.typescriptlang.org/tsconfig
增强自己typescript能力，做类型体操题目
<!-- 题目 -->
https://github.com/type-challenges/type-challenges
<!-- 题目+答案 -->
https://ghaiklor.github.io/type-challenges-solutions/en/

    