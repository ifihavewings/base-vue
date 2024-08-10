# TS 是什么？

TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。`TypeScript 添加了类型系统`，可以编译为 JavaScript，运行在任何浏览器、Node.js 或 Web 服务器上。


# 类型

## 类型声明

类型声明是可选的，你可以加，也可以不加。即使不加类型声明，依然是有效的 TypeScript 代码，只是这时不能保证 TypeScript 会正确推断出类型。

```ts
let a:string = 'abc'
```


## 类型推断
```ts
let x = {
    a: 3
}

delete x.a
```
以上代码在 TypeScript 中会报错，因为 a 是 x 的静态属性， 不能删除， 只有可选属性才可以删除。在给 x 赋值的时候， ts 自动进行了类型推断。改成下面这样就不会报错了:

```ts
interface IOjb {
    a?:3
} 
let x:IOjb = {
    a: 3
}

delete x.a
```

## any

any 表示任意类型， 即可以赋值给任意类型。

```ts
let x:any;

x= 1;
x= false
x= () => 1
console.log(x)
```
## unknown
unknown 表示未知类型， 即不能赋值给任意类型。

## never

never 表示永远不存在的值的类型。

## null 

如果没有声明类型的变量，被赋值为undefined或null，在关闭编译设置noImplicitAny和strictNullChecks 时，它们的类型会被推断为any。如果希望避免这种情况， 需要打开 `strictNullChecks`; 

## undefined 

如果没有声明类型的变量，被赋值为undefined或null，在关闭编译设置noImplicitAny和strictNullChecks 时，它们的类型会被推断为any。如果希望避免这种情况， 需要打开 `strictNullChecks`; 
## void

void 表示没有任何类型， 即不能赋值给任意类型。

## object

object 表示非原始类型， 即不能赋值给任意类型。

## 联合类型

联合类型表示取值可以为多种类型中的一种。

```ts
let x:string | number

x = 'abc'
x = 123
```

## 交叉类型

交叉类型表示取值是多种类型中的所有类型。

```ts
let x:string & number & boolean & object & any & never & unknown & symbol & bigint & undefined & null & void & symbol & bigint & undefined & null & void
```

## 类型断言

类型断言是用来手动指定一个值的类型。

```ts
let x:any = 'abc'

let y:string = x as string
```

## 类型别名

类型别名是用来给类型起别名。

```ts
type MyType = string | number

let x:MyType = 'abc'
let y:MyType = 123
```
## 类型推论

类型推论是 TypeScript 根据赋值语句自动推断出类型。

```ts
let x = 'abc'

x = 123
```

## 类型兼容性

类型兼容性是用来判断一个类型是否可以赋值给另一个类型。

```ts
let x:string = 'abc'

let y:string = x
```

## 类型保护

类型保护是用来判断一个值的类型是否满足某个条件。

```ts
let x:string | number = 'abc'

if (typeof x === 'string') {
    console.log(x.length)
} else {
    console.log(x.toFixed(2))
}
```
