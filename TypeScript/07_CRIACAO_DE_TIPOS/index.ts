/**
 * Generics
 */
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData(['teste']));

/**
 * Constraint em generic
 */
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' };
console.log(showProductName(myObj));

const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
console.log(showProductName(otherProduct));

const thirdObj = { price: 19.99, category: 'Roupa' };
// console.log(showProductName(thirdObj));

/**
 * Generic com interface
 */
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen: Pen = {
  name: 'Caneta BIC',
  wheels: false,
  engine: false,
  color: 'Azul',
};

console.log(myCar);
console.log(myPen);

/**
 * Type parameters
 */
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: '2TB',
  ram: '32gb',
};
console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'teste'));

/**
 * keyof type operator
 */
type Character = { name: string; age: number; hasDriveLicense: boolean };
type C = keyof Character;

function showCharacterName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myCharacter: Character = {
  name: 'Nathália',
  age: 36,
  hasDriveLicense: true,
};
console.log(showCharacterName(myCharacter, 'name'));
console.log(showCharacterName(myCharacter, 'age'));

/**
 * typeof type operator
 */
const userName: string = 'Nathália';
const userName2: typeof userName = 'Maria';
// const userName3: typeof userName = 14;

type x = typeof userName;
const userName4: x = 'Claudia';

/**
 * indexed access type
 */
type Truck = { km: number; kg: number; description: string };
type KM = Truck['km'];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
};

function showKM(km: KM) {
  console.log(`O veículo tem a km de: ${km}`);
}
showKM(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
};
showKM(newCar.km);

/**
 * conditional types
 */
interface A {}
interface B extends A {}
interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2: myType = 'teste';

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

/**
 * template literals type
 */
type testA = 'text';
type CustomType = `some ${testA}`;

const testing: CustomType = 'some text';
// const testing2: CustomType = 'some text 2';

type a1 = 'Testando';
type a2 = 'Union';

type a3 = `${a1}` | `${a2}`;
