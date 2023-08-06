import { hyRequest2 } from "..";

hyRequest2.request({
  url:"/entire/list",
  params: {
    offset:0,
    size:20
  }
}).then(res => {
  console.log(res.data);
  
})