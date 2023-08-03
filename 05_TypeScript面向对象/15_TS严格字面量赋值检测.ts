interface IPerson {
  name:string
  age:number
}

// 1.奇怪现象一
// 解释：obj第一次被创建 新鲜的
const obj = {
  name:'why',
  age:18,
  // 多一个heighr属性,但是没有报错
  heighr:.188 
}
// 定义info，类型是IPerson类型
//  解释：obj第二次使用就不新鲜了，不会严格检测，所以可以有多余属性
const info: IPerson = obj

// 2.奇怪现象二
function printPerson(person:IPerson){}
const kobe = {name:"why",age:30,height:1.88}//多出一个height，但是没有报错
printPerson(kobe)

// 为什么会出现这种情况呢?
// 第一次创建的对象字面量，称之为fresh（新鲜的）
// 对于新鲜的字面量，会进行严格的类型检测，必须完全满足类型的要求（不能有多余的属性）
const p: IPerson = obj
export {}