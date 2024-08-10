// 类装饰器
function LogClass(target: ClassConstructor) {
    // 通过装饰器修改类的行为
    console.log("Logging class:", target);
}

// 给类(Function)增加索引签名
interface ClassConstructor {  
    new (...args: any[]): any;  
    [key: string]: any; // 索引签名，允许用字符串作为键来索引  
} 
/**
 * 
new (...args: any[]): any;
这一行定义了一个构造函数签名。这意味着任何符合 ClassConstructor 接口的类型都应该是一个构造函数，可以接受任意数量和类型的参数，并返回任意类型的值。在 TypeScript 中，当你定义一个接口并包含一个构造函数签名时，你实际上是在定义一个可以被 new 关键字实例化的类型。

[key: string]: any;
这一行定义了一个索引签名。索引签名允许你使用字符串类型的键来索引对象的属性。在这里，索引签名 [key: string]: any; 意味着你可以使用任何字符串作为键来访问 ClassConstructor 接口类型的对象的属性，并且这些属性的值可以是任意类型。

这样的接口通常用于装饰器或者任何需要动态地给类添加属性的场景中。装饰器是 TypeScript 中的一个高级特性，它允许你在不修改类代码的情况下添加或修改类的行为。由于装饰器在运行时工作，TypeScript 编译器在静态类型检查期间无法知道装饰器对类做了什么修改。因此，有时需要手动扩展类的类型定义，以反映装饰器添加的额外属性或方法。


 */

// 添加静态属性的装饰器  
function AddStaticProperty(key: string, value: any) {  
    return function (target: ClassConstructor) {  
        target[key] = value;  
    };  
}  

// 增加静态方法
const attachFn1 = (str: string) => {
    console.log('====================================');
    console.log('attach');
    console.log('====================================');
    return `${str} attachFn1`
}

// 方法装饰器
const decSayHi = (target:any, key: string, descriptor: PropertyDescriptor) => {
   console.log("decSayhi")
   console.log(target, key, descriptor)
   console.log("end== decSayhi")
}

@LogClass
@AddStaticProperty('isLog', true)
@AddStaticProperty('attach',attachFn1)
class ExampleClass {
    constructor() {
        console.log("Creating an instance of ExampleClass");
    }
    @decSayHi
    sayHi() {
        console.log('sayHi: Hi')
    }
}

// 创建 ExampleClass 实例
const e = new ExampleClass();
(ExampleClass as any).attach('5')
console.log((ExampleClass as any).isLog)
