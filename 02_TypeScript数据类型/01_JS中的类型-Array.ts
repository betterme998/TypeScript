// 明确指定<数组>的类型注解：两种写法如下
// 1.如果数组中存放字符串类型: 1.string[] :数组类型,并且数组中存放的字符串类型  
// 2.Array<string>: 数组类型,并且数组中存放的是字符串类型  泛型写法
// 注意事项: 在真实的开发中,数组一般存放相同的类型,不要存放不同的类型
let naem: string[] = ["abc", "cba", "nba"]
naem.push('aaa')
// naem.push(123) 报错

let nums: Array<number> = [123,21,321]

export {}