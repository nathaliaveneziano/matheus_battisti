var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * exemplo de method decorator
 */
function myDecorator() {
    console.log('Iniciando o decorator!');
    return function (target, propertyKey, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log('Terminando execução do método');
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
console.log('----------------------------------------------------------------');
/**
 * multiplos decorators
 */
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('executou a.');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('executou b.');
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log('executou c.');
    };
}
class MultipleDecorator {
    testing() {
        console.log('Terminando execução do método');
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorator.prototype, "testing", null);
const multiple = new MultipleDecorator();
multiple.testing();
console.log('----------------------------------------------------------------');
/**
 * class decorator
 */
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log('criando usuário');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const nathalia = new User('Nathália');
console.log(nathalia);
console.log('----------------------------------------------------------------');
/**
 * method decorator
 */
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator.showName());
console.log('----------------------------------------------------------------');
/**
 * acessor decorator
 */
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        return `Nome do monstro: ${this.name}`;
    }
    showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster('Charmander', 10);
console.log(charmander);
console.log('----------------------------------------------------------------');
/**
 * property decorator
 */
// 1 - 00001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem);
console.log(newItem.id);
console.log('----------------------------------------------------------------');
/**
 * exemplo real com class decorator
 */
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
console.log(newBook);
console.log(newBook.createdAt);
const newPen = new Pen(55);
console.log(newPen);
console.log('----------------------------------------------------------------');
/**
 * exemplo real method decorator
 */
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
newPost.post('Meu terceiro post!', newPost.alreadyPosted);
console.log('----------------------------------------------------------------');
/**
 * exemplo real property decorator
 */
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres`);
                return;
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin('pedroadmin12345');
let lee = new Admin('lee');
console.log(lee);

