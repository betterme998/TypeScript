
// 类型别名：type
type MyNumber = number
const age: MyNumber = 18

// 给id的类型取一个别名
type IDType = number | string
function printID(id:IDType) {
  console.log(id);
  
}

// d打印坐标
type PointType = {x:number,y:number,z:number}
function printCoordinate(point:PointType) {
  console.log(point.x);
  
}
export{}