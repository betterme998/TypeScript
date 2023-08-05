import { sum } from "./utils/math";
import {data} from "./utils/format"

// 导入的是类型，推荐在类型前面加上type关键字
// 加上type 可以明确告诉编译器，在编写代码的过程中进行类型检测，但是最终这行代码没有用
// 最终在经过编译之后，会被删除掉，对于编译器来说需要识别，导入的是不是类型，是类型待会就删掉
// 不是类型就保留下来。
// 如果通过语法识别会比较麻烦，给先进入文件在判断是不是导入类型，如果加上前缀type
// 可以让非typescript编译器比如Babel，swc或者esbuild知道什么样的导入可以被安全移除
import {type IPerson,type IDType} from "./utils/type";
console.log(sum(20,30));

const id1 :IDType = 123

// 使用命名空间的内容  不推荐使用
data.format("122")
