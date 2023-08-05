
// 配置webpack 将ts转js
// 1.npm init
// 1.安装webpack: npm install webpack webpack-cli -D  
// 2.创建webpack.config.js 文件
// 下载配置依赖文件  npm install ts-loader -D    npm install html-webpack-plugin -d
// npm install webpack-dev-server -D  本地服务器

import {sum} from "./utils/math"
import axios from "axios";
import App from "./vue/App.vue"
// import lodash from 

const message: string = "Hello World"
console.log(message.length,message);
console.log(sum(20,30));


// lib.dom.d.ts 文件里的
const h2El = document.createElement("h2")
h2El.textContent = "hello typescript"
document.body.append(h2El)

// lib.es2015.d.ts 文件里
const promise = new Promise((resolve,reject)=>{

})

// 给自己的代码添加类型声明文件
// IDType 写在why.d.ts声明文件中
const id1:IDType = 123

// 平时代码中用到的类型直接在当前位置编写即可，不用刻意写入声明文件



// 需要编写类型声明
const od2 = new Person("why",123)

// 图片文件的使用
const imgEl = document.createElement("img")
imgEl.src = '1321'
document.body.append(imgEl)
export{}
