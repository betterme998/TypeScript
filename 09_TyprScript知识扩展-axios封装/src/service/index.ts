import { BASE_URL, TIME_OUT } from "./config";
import HYRequest from "./request";

// 传入配置对象config
const hyRequest = new HYRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT

})



// 响应拦截会生效
export const hyRequest2 = new HYRequest({
  // 因为HYRequest 参数类型是AxiosRequestConfig，但是我们需要传入拦截器
  // 所以提取声明，让它不新鲜，不会进行严格检测
  baseURL:"http://codercba.com:1888/airbnb/api",
  timeout:8000,
  // 对拦截做精细控制：部分拦截 部分不拦截
  // 传入拦截器
  interceptors:{
    requestFailureFn:(config) => {
      return config
    },
    requestSuccessFn:(err) => {
      return err
    },
    responseSuccessFn:(res) => {
      return res
    },
    responseFailureFn:(err) => {
      return err
    }
  }
})

export default hyRequest