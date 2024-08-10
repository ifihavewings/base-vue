var GenAnimal;
(function (GenAnimal) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.sayHi = function () {
            console.log("".concat(this.name, " says:\u6C6A\u6C6A\u6C6A"));
        };
        return Dog;
    }());
    GenAnimal.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.sayHi = function () {
            console.log("".concat(this.name, " says:\u55B5\u55B5\u55B5"));
        };
        return Cat;
    }());
    GenAnimal.Cat = Cat;
})(GenAnimal || (GenAnimal = {}));
/// <reference path="./7.namespace.ts" />
var GenAnimal;
(function (GenAnimal) {
    var Pig = /** @class */ (function () {
        function Pig(name) {
            this.name = name;
        }
        Pig.prototype.sayHi = function () {
            console.log("".concat(this.name, " says:\u54FC\u54FC\u54FC"));
        };
        return Pig;
    }());
    GenAnimal.Pig = Pig;
})(GenAnimal || (GenAnimal = {}));
/// <reference path="./7.namespace.ts" />
// import { Animal } from './7.namespace';
/// <reference path="./8.namespace.ts" />
// 调用命名空间中的类
var dog = new GenAnimal.Dog("wangwang");
dog.sayHi();
