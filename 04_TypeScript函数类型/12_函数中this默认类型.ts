// 在没有对ts做特殊配置情况下，this是any类型

// 配置ts
  // .终端中输入 tsc --init 生成配置文件
  //  打开 "noImplicitThis": true,     后本文件报错，因为不允许存在模糊的this

// 1.对象中的函数中的this

const obj = {
  name:"why",
  studying: function () {
    // 默认情况下，this是any类型
    console.log(this.name);
    
  }
}

obj.studying()

// 2.普通函数
function foo() {
  console.log(this);
  
}



export{}