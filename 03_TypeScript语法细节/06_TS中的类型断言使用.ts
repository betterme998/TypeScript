// 获取DOM元素 <img class="img">
// const imfE1 = document.querySelector("img")
// 当获取元素时，会根据传入的类，id，标签等返回不同类型。这个时候可能会用错，可以通过断言解决 as
// 因为不确定，所以使用断言
// if (imfE1 !== null) {
//   imfE1.src = "xxx"
// }

// 使用类型断言
// 当明确知道拿到的元素为某个类型时，可以使用断言，让其返回为该类型，来减小类型缩小代码，直接使用就行
const imfE1 = document.querySelector(".img") as HTMLImageElement
// 直接使用
imfE1.src = "xxx"


// 类型断言的规则:断言只能断言成更加具体的类型，或不太具体类型(any/unknown)
const age:number = 18

// 错误做法
// const age2 = age as string

// ts类型检查来说正确，但是这个代码本身不太正确
// const age3 = 

export {}