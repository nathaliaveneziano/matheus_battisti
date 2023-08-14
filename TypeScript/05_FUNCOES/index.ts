/**
 * void
 */
function withoutReturn(): void {
  console.log('Essa função não tem retorno!');
}
withoutReturn();

/**
 * Callback como argumento
 */
function greeting(name: string): string {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userNmae: string) {
  console.log('Preparando a função!');

  const greet = f(userNmae);
  console.log(greet);
}

preGreeting(greeting, 'Nathália');
preGreeting(greeting, 'Maria');

/**
 * Generic Function
 */
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects(
  { name: 'Nathália' },
  { age: 36, jpb: 'Programmer' }
);
console.log(newObject);

/**
 * Constraints
 */
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
// console.log(biggestNumber('12', 5));

/**
 * Especificar tipo de argumento
 */
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays<number | string>([1, 2, 3], ['teste', 'testando']));

/**
 * Parametros opcionais
 */
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting('Nathália'));
console.log(modernGreeting('Pedro', 'Dr.'));

/**
 * Parametro default
 */
function somaDefault(n: number, m = 10) {
  return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 15));

/**
 * unknown
 */
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === 'number') {
    console.log('X é um número');
  }
}

doSomething([1, 2, 3]);
doSomething(5);

/**
 * Never
 */
function showErrorMessage(message: string): never {
  throw new Error(message);
}
// showErrorMessage('Algum erro');

/**
 * rest operator
 */
function sumALl(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}

console.log(sumALl(1, 2, 3, 4, 5));
console.log(sumALl(5, 348, 2348));

/**
 * destructuring operator
 */
function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O nome do produto é ${name} e ele custo R$${price}`;
}

const shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
