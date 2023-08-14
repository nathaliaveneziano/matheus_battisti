/**
 * Campos em classes
 */
class User {
  name!: string;
  age!: number;
}

const nathalia = new User();
console.log(nathalia);

nathalia.name = 'Nathália';
// nathalia.job = 'Programmer';
console.log(nathalia);

/**
 * Constructor
 */
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const claudia = new NewUser('Claudia', 57);
console.log(claudia);

/**
 * Campo readonly
 */
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car('Fusca');
console.log(fusca);
console.log(fusca.wheels);

fusca.name = 'Fusca Turbo';
// fusca.wheels = 5;
console.log(fusca);

/**
 * Herança e super
 */
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine('Trator');
console.log(trator);

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyed = new KillerMachine('Destryer', 4);
console.log(destroyed);

/**
 * Métodos
 */
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log('Hey Stranger!');
  }
}

const jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
jimmy.greeting();

/**
 * This
 */
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`
    );
  }
}

const volvo = new Truck('Volvo', 400);
volvo.showDetails();

const scania = new Truck('Scania', 500);
scania.showDetails();

/**
 * getters
 */
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return this.name + ' ' + this.surname;
  }
}

const nathaliaVeneziano = new Person('Nathália', 'Veneziano');
console.log(nathaliaVeneziano);
console.log(nathaliaVeneziano.fullName);

/**
 * setters
 */
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) return;
    this.x = x;
    console.log('X inserido com sucesso');
  }

  set fillY(y: number) {
    if (y === 0) return;
    this.y = y;
    console.log('Y inserido com sucesso');
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`;
  }
}

const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
console.log(myCoords);

myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);

/**
 * Implements
 */
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new blogPost('Hello world');
console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return this.title;
  }
}

const myTest = new TestingInterface('Hello world');
console.log(myTest.itemTitle());

/**
 * Override de métodos
 */
class Base {
  someMethod() {
    console.log('alguma coisa');
  }
}

class Nova extends Base {
  someMethod() {
    console.log('testando outra coisa');
  }
}

const myObject = new Nova();
myObject.someMethod();

/**
 * Visibilidade - public
 */
class C {
  public x = 10;
}

class D extends C {}

const cInstance = new C();
console.log(cInstance.x);

const dInstance = new D();
console.log(dInstance.x);

/**
 * Visibilidade - protected
 */
class E {
  protected x = 10;

  protected protedctedMethod() {
    console.log('Este método é protegido');
  }
}

class F extends E {
  showX() {
    console.log('X: ' + this.x);
  }

  showProtectedMethod() {
    this.protedctedMethod();
  }
}

const fInstance = new F();
// console.log(fInstance.x);
fInstance.showX();
fInstance.showProtectedMethod();

/**
 * Visibilidade - private
 */
class PrivateClass {
  private name = 'Private';

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log('Método privado');
  }

  showPrivateMethod() {
    return this.privateMethod();
  }
}

const pObj = new PrivateClass();
// console.log(pObj.name);
console.log(pObj.showName());
// pObj.privateMethod();
pObj.showPrivateMethod();

class TestingPrivate extends PrivateClass {
  myMethod() {
    // this.privateMethod();
    this.showPrivateMethod();
  }
}

/**
 * static members
 */
class StaticMembers {
  static prop = 'Teste static';

  static staticMethod() {
    console.log('Este é um método estático');
  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

/**
 * generic class
 */
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item('caixa', 'surpresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);

const secondItem = new Item(12, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

/**
 * Parameters properties
 */
class ParametersProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Qtd total: ${this.qty}`;
  }

  get showPrice() {
    return `Preço: R$${this.price}`;
  }
}

const newShirt = new ParametersProperties('Camisa', 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);

/**
 * class expressions
 */
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass('Jones');
console.log(pessoa);
console.log(pessoa.name);

/**
 * abstract class
 */
abstract class AbstractClass {
  abstract showName(): void;
}

// const newObj = new AbstractClass();

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é: ${this.name}`);
  }
}

const newAbstractObject = new AbstractExample('Joaquina');
newAbstractObject.showName();

/**
 * relações entre classes
 */
class Dog {
  name!: string;
}
class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();
console.log(doguinho);
