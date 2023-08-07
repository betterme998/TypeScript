import type { AxiosRequestConfig,AxiosResponse } from "axios"

// 针对AxiosRequestConfig配置进行扩展 ，因为要传入拦截器
// 泛型 接收自定义的类型 
export interface HYInterceptor<T = AxiosResponse> {
  // 请求成功拦截
  requestSuccessFn?: (config:AxiosRequestConfig) => AxiosRequestConfig
  // 请求失败拦截
  requestFailureFn?: (err:any) => any
  // 响应成功拦截
  responseSuccessFn?: (res:T) => T
  // 响应失败拦截
  responseFailureFn?:(err:any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {  
  // 继承AxiosRequestConfig 并扩展
  interceptors?: HYInterceptor<T>
}