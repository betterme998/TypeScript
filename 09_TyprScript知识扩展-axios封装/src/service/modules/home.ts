import hyRequest from "..";


interface IHomeData {
  data:any,
  returnCode:string,
  success:boolean
}
// 发生网络请求
// IHomeData类型是根据具体的数据自己定的
hyRequest.request<IHomeData>({
  url:"/home/multidata"
}).then(res => {
  console.log(res);
})
