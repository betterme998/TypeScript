// 1.typeof:使用的最多
function printID(id: number | string) {
  if (typeof id === "string") {
    
  }else{
    console.log(id);
    
  }
}

// 平等缩小
// 2.方向的类型判断
type Direction = 'left' | "right" | "up" | "down"
function switchDirection (direction:Direction) {
  if (direction === "left") {
    console.log("左");
  }else if(direction === "right"){

  }
  else if(direction === "up"){

  }else {

  }
}

// 3.传入一个日期，打印日期
function printDate(date:string | Date) {
  // if (typeof date === "string") {
  //   console.log(date);
  // }else {
  //   console.log(date.getTime());
    
  // }


  // 判断date是不是Date的实例
  if (date instanceof Date) {
    console.log(date.getTime());
  }else{
    console.log(date);
    
  }
}

// in 操作符
// 4.判断是否有某个属性
type ISwim = {
  swim: () => void
}
interface IRun {
  run: () => void
}

function move (animal: ISwim | IRun) {
  if ("swim" in animal) {
    animal.swim
  }else if("run" in animal){
    animal.run()
  }
}

const fish: ISwim = {
  swim:function() {

  }
}

const dog: IRun = {
  run: function() {

  }
}

move(fish)
move(dog)