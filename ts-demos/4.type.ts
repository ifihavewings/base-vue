//  类型别名
type YI = 1
type er = (a: number, b: number) => number

const a : YI = 1
console.log(1 === a)
const b: er = (a, b) => a + b
console.log(b(1, 2))