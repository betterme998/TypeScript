// 1.如果一个函数没有任何返回值,那么返回值的类型就是void类型 ,也可以不写,没有返回值默认 void
// 2.如果返回值是void类型,那么我们也可以返回undefined (ts允许这样做)
function foo(num1: number,num2:number): void{
  console.log(num1+num2);
  return undefined  //如果返回值是void类型,那么我们也可以返回undefined
}

// 应用创建: 用来指定函数类型的返回值是void
type LyricInfoType = {time:number,text:string}
// parseLyric函数的数据类型:(lyric: string) => LyricInfoType[]
function parseLyric(lyric: string): LyricInfoType[] {
  const lyricInfos: LyricInfoType[] = []

  return lyricInfos
}

type FooType = () => void
const foos: FooType =() =>{

}

// 例子
// fn是函数,没有指定类型
// 1.定义要求传入函数的类型
type execType = (...args:any[]) => void
// 2.定义一个函数,并接收的参数也是一个函数,而且函数类型必须是execType类型
function applaFn(fn: execType) {
  setTimeout(() => {
    fn("why",18)
  },1000)
}
// 执行上面函数,并且传入一个匿名函数
// applaFn(123)  我们传入其他类型 会报错不严谨,所以可以用 void
applaFn((name,age) =>{
  console.log(name,age);
  
})

export{}