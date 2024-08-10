// eslint-disable-next-line no-unused-vars
const testfn = (a, b, c) => {
  console.log('====================================')
  console.log(a, b, c)
  console.log('====================================')
}

const beforeFn = (fn, ...args1) => {
  return (...args) => {
    fn.apply(null, args)
    console.log('args', args)
  }
}

const bf1 = (j, k) => {
  console.log(`'bf1',j,k`)
  console.log('bf1', j, k)
}

const bfn = beforeFn(bf1, 1,2,3)

bfn('ok', 'okk')

// import {before} from "lodash-es"

// console.log('====================================');
// console.log(before);
// console.log('====================================');
