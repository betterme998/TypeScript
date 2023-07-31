
// 没办法确定类型时,使用any
// any类型就表示不限制标识符的任意类型,并且可以在标识符上面进行任意操作(相当于回到js)
let id:any = "aaaa"

id = 123
id = {name:'why'}

// 定义数组
const infos: any[] = ["why",18]
