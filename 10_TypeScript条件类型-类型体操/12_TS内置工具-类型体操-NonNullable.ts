// NonNullable<Type>
// .用于构造一个类型，这个类型从Type中排除了所有的null，undefined的类型


type IKun = "sing" | "dance"|"rap"|null|undefined
// 排除联合联系 rap
type IKun2 = NonNullable<IKun>


// 类型体操 实现Pick
// 分发 依次进行条件类型
type HNonNullable<T> = T extends null|undefined? never:T
type IKun3 = HNonNullable<IKun>

export{}