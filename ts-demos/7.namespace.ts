namespace GenAnimal {
    export interface Animal {
        name: string;
        sayHi(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHi() {
            console.log(`${this.name} says:汪汪汪`);
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHi() {
            console.log(`${this.name} says:喵喵喵`);
        }
    }
}

