import axios from "axios"
import type {AxiosInstance,AxiosRequestConfig,AxiosResponse} from "axios"
import type {HYRequestConfig} from "./type"
// 拦截器：蒙版loading/token/修改配置

// 封装axios 封装了三种拦截请求，1.全局拦截 2.特定请求拦截 3.单次请求拦截

/*
/**
 * 两个难点：
 * 1.拦截器进行精细控制
 *  》全局拦截器
 *  》实例拦截器
 *  》单次请求拦截器
 * 
 * 2.响应结果的类型处理（泛型）
 * 
 * / 

*/ 


class HYRequest {
  instance:AxiosInstance
  // 每个request实例 => 每个axios实例
  // 传入的参数不确定，干脆传入一个配置对象 config
  // config的类型鼠标移入可查看
  constructor(config:HYRequestConfig) {
    // create函数返回的是AxiosInstance类型 鼠标移上去看得到。所以 在定义属性时，导入AxiosInstance类型，注意签名加上type 告诉编辑器这是类型，待会可以删掉
    this.instance = axios.create(config)

    // 1.全局拦截
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

    // 2.特定请求拦截
    // 针对特定的hyRequest实例添加拦截器
    if (config.interceptors) {
      // 请求成功/失败拦截
      this.instance.interceptors.request.use(
        config.interceptors.requestFailureFn,
        config.interceptors.requestSuccessFn
      )
      // 响应成功/失败
      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn
      )
    }

 }

  // 封装网络请求的方法
  // 给请求方法传入泛型：为了返回的动态的指定promise的类型
  request<T = any>(config:HYRequestConfig<T>) {
    // 对部分请求进行拦截 需要手动调用
    // 单次请求的成功拦截处理
    // 3.单次请求拦截
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    // 返回promise是为了响应成功后的操作
    // 这里要指定promisr的泛型 T。不然promise的类型为unknown
    return new Promise<T>((resolve,reject) => {
      // 发送网络请求
      this.instance.request<any, T>(config).then(res => {
        // 如果有响应成功的拦截器，就调用响应成功拦截
        // 单次响应的成功拦截处理
        if (config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }

        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get<T = any>(config:HYRequestConfig<T>) {
    return this.request({...config,method:"GET"})
  }
  post<T = any>(config:HYRequestConfig<T>) {
    return this.request({...config,method:"POST"})
  }
  delete<T = any>(config:HYRequestConfig<T>) {
    return this.request({...config,method:"DELETE"})
  }
  patch<T = any>(config:HYRequestConfig<T>) {
    return this.request({...config,method:"PATCH"})
  }
}

export default HYRequest