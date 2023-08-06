import hyRequest from "..";

// 发生网络请求
hyRequest.request({
  url:"/home/multidata"
}).then(res => {
  console.log(res.data);
})
