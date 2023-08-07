
// Record<Keys,Type>
// 用于构造一个对象类型，它所有的key（键）都是keys类型，它所有的value值都是Type类型

interface IKun {
  name:string
  age:number
  slogan?:string
}

type t1 = "上海"|"北京"|"洛杉矶"
// t1是key，IKun是值
type IKun2 = Record<t1,IKun>


// 确保keys一定是可以作为key的联合类型
type HRecord<Keys extends keyof any,T> = {
  [P in Keys] : T
}

type IKun3 = HRecord<t1,IKun>
const ikuns:IKun3 = {
  "上海":{
    name:"xx",
    age:10
  },
  "北京":{
    name:"xx",
    age:10
  },
  "洛杉矶":{
    name:"xx",
    age:10
  }
}

export{}
