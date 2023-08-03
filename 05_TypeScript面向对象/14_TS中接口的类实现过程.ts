interface IKun {
  name:string
  age:number
  slogan:string

  playBasketball:() => void
}

interface IRun {
  running: () => void
}

const ikun: IKun = {
  name:"why",
  age:18,
  slogan:"你干嘛",
  playBasketball:function(){}
}
// 作用：接口被类实现
class Person implements IKun,IRun {
  name:string
  age:number
  slogan:string

  playBasketball() {

  }
  running() {

  }
}
const ikun2 = new Person()
// ikun2拥有ikun的所有属性
console.log(ikun2.name);
ikun2.running()
ikun2.playBasketball()


export{}