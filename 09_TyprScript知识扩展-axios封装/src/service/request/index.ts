import axios from "axios"
import type {AxiosInstance,AxiosRequestConfig} from "axios"

// 拦截器：蒙版loading/token/修改配置


// 针对AxiosRequestConfig配置进行扩展 ，因为要传入拦截器
// interface HYRequestConfig 


class HYRequest {
  instance:AxiosInstance
  // 每个request实例 => 每个axios实例
  // 传入的参数不确定，干脆传入一个配置对象 config
  // config的类型鼠标移入可查看
  constructor(config:AxiosRequestConfig) {
    // create函数返回的是AxiosInstance类型 鼠标移上去看得到。所以 在定义属性时，导入AxiosInstance类型，注意签名加上type 告诉编辑器这是类型，待会可以删掉
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    // 请求成功/失败拦截
    this.instance.interceptors.request.use((config) => {
      console.log("全局请求成拦截");
      return config
    },err => {
      console.log("全局请求失败拦截");
      return err
    })
    // 响应成功/失败拦截
    this.instance.interceptors.response.use((res) => {
      console.log("全局响应成功拦截");
      return res
    },err =>{
      console.log("全局响应失败拦截");
      return err
    })

    // 拦截器可以添加多个，并不会被覆盖
    if (condition) {
      
    }

 }

  // 封装网络请求的方法
  request(config:AxiosRequestConfig) {
    return this.instance.request(config)
  }
  get() {}
  post() {}
}

export default HYRequest