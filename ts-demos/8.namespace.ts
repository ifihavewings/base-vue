/// <reference path="./7.namespace.ts" />
namespace GenAnimal {
    export class Pig implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHi() {
            console.log(`${this.name} says:哼哼哼`);
        }
    }
}