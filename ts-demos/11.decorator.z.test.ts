function BeforeAndAfter(target: any, key: string, descriptor: PropertyDescriptor
) {
  const originFn = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log('before')
    const res = originFn.call(this, ...args)
    console.log('after')
    return res;
  }
  return descriptor;

}
function BAA(b: Function, a: Function) {
  return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    const originFn = (descriptor as any).value
      descriptor.value = function (...args: any[]) {
        b.call(this, this)
        // b(this)
        const res: unknown = originFn.apply(this, args)
        a.call(this, this)
        // a(this)
        return res
      }
    return descriptor
  }

}

function bfn(d: Dog) {
  console.log('=================b===================');
  console.log(d.catogary)
}

function afn(d: Dog) {
  console.log('==================a==================');
  console.log(d.catogary)
}

class Dog {
  catogary: string;
  constructor() {
    this.catogary = 'dog'
  }
  @BeforeAndAfter
  eat(food: string[]) {
    console.log(this.catogary, food)
  }

  @BAA(bfn, afn)
  bark(str: string) {
    console.log(`i am saying ${str}`)
  }
}

const d1 = new Dog()
d1.eat(['hama']);
d1.bark('wawoo-')