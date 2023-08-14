/**
 * exemplo de method decorator
 */
function myDecorator() {
  console.log('Iniciando o decorator!');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando decorator');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {
  name!: string;

  @myDecorator()
  testing() {
    console.log('Terminando execução do método');
  }
}

const myObj = new MyClass();
myObj.testing();
console.log('----------------------------------------------------------------');

/**
 * multiplos decorators
 */
function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou a.');
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou b.');
  };
}

function c() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou c.');
  };
}

class MultipleDecorator {
  @c()
  @a()
  @b()
  testing() {
    console.log('Terminando execução do método');
  }
}

const multiple = new MultipleDecorator();
multiple.testing();
console.log('----------------------------------------------------------------');

/**
 * class decorator
 */
function classDecorator(constructor: Function) {
  console.log(constructor);

  if (constructor.name === 'User') {
    console.log('criando usuário');
  }
}

@classDecorator
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}
const nathalia = new User('Nathália');
console.log(nathalia);

console.log('----------------------------------------------------------------');

/**
 * method decorator
 */
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(true)
  showName() {
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine('Trator');
console.log(trator.showName());

console.log('----------------------------------------------------------------');

/**
 * acessor decorator
 */
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  showName() {
    return `Nome do monstro: ${this.name}`;
  }

  @enumerable(false)
  showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const charmander = new Monster('Charmander', 10);
console.log(charmander);

console.log('----------------------------------------------------------------');

/**
 * property decorator
 */
// 1 - 00001
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      value = newValue.padStart(5, '0');
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID('1');
console.log(newItem);
console.log(newItem.id);

console.log('----------------------------------------------------------------');

/**
 * exemplo real com class decorator
 */
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;

  constructor(id: number) {
    this.id = id;
  }
}

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
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log('Usuário já postou!');
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };

    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
newPost.post('Meu terceiro post!', newPost.alreadyPosted);

console.log('----------------------------------------------------------------');

/**
 * exemplo real property decorator
 */
function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} caracteres`);
        return;
      } else {
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
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin('pedroadmin12345');
let lee = new Admin('lee');
console.log(lee);

