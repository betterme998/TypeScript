// Exclude<UnionType,ExcludedMembers>
// 用于构造一个类型，它是从UnionType联合类型里面排除了所有可以赋值给ExcludedMembers的类型

type IKun = "sing" | "dance"|"rap"
// 排除联合联系 rap
type IKun2 = Exclude<IKun,"rap">


// 类型体操 实现Pick
// 分发 依次进行条件类型
type HExclude<T,E> = T extends E? never:T 
type IKun3 = HExclude<IKun,"rap">

export{}