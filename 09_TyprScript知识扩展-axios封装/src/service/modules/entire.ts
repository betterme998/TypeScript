import { config } from "webpack";
import { hyRequest2 } from "..";

// 定义服务器返回的数据类型
interface IHighScoreData {
  list:any[],
  subtitle:string,
  title:string,
  type:string,
  _id:string
}


hyRequest2.request({
  url:"/entire/list",
  params: {
    offset:0,
    size:20
  }
}).then(res => {
  console.log(res.data);
  
})


// 针对这个请求添加拦截器
// 使用泛型 传入需要返回的数据类型
hyRequest2.request<IHighScoreData>({
  url:"/home/highscore",
  // 这是扩展的类型
  interceptors:{
    requestSuccessFn:(config) => {
      console.log("/home/highscore 请求成功的拦截");
      
      return config
    },
    responseSuccessFn:(res) => {
      console.log("/home/highscore 响应成功的拦截");
      
      return res
    }
  }
}).then(res => {
  console.log(res);
  
})