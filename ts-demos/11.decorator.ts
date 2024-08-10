// 在 TypeScript 中，当你编写一个装饰器时，return descriptor 是必要的，特别是当你修改了 descriptor 的属性（如 value、get、set 等）时。这样做是为了确保被装饰的方法或属性能够按照你修改后的描述进行工作。

// 当你为类的方法或属性应用装饰器时，TypeScript 编译器实际上是在类的构造期间调用这个装饰器函数，并将有关被装饰的元素的信息作为参数传递给这个函数。这个信息封装在一个 PropertyDescriptor 对象中，称为 descriptor。

// 如果装饰器函数修改了 descriptor 的任何属性，并且没有返回这个修改后的 descriptor，那么这些修改将不会被应用到原始的方法或属性上。相反，原始的、未经修改的 descriptor 会被用于创建类的方法或属性。因此，为了确保你的修改生效，你需要返回修改后的 descriptor。

function logBeforeAndAfter(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {  
    console.log("target:", target)
    const originalMethod = descriptor.value;  
    
    descriptor.value = function (...args: any[]) {  
      // 方法执行之前打印语句  
      console.log(`调用 ${propertyKey} 方法之前`);  
    
      /**
       * 当使用装饰器修改类的方法时，你实际上是创建了一个新的函数，并把这个新函数赋值给 descriptor.value。
       * 然后，当这个被装饰的方法被类的实例调用时，this 会指向那个实例。
       */
      // 调用原始方法  
      const result = originalMethod.apply(this, args);  
    
      // 方法执行之后打印语句  
      console.log(`调用 ${propertyKey} 方法之后`);  
    
      // 返回原始方法的返回值  
      return result;  
    };  
    
    return descriptor;  
  }  
    
  // 使用装饰器  
  class MyClass {  
    @logBeforeAndAfter  
    myMethod(param: string) {  
      console.log(`执行方法，参数为: ${param}`);  
    }  
  }  
    
  // 创建类实例并调用方法  
  const instance = new MyClass();  
  instance.myMethod('Hello, World!');