// 分发条件类型
// .当在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成分发

// 当在泛型中使用条件类型
type toArray<T> = T extends any ? T[]:never 

type NumArray = toArray<number>

// 传入联合类型
type NumAndStrArray = toArray<number|string>

