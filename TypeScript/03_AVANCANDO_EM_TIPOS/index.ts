/**
 * Arrays - Nova Sintaxe
 */
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);

// numbers = 'teste';

const nomes: string[] = ['Nathália', 'Marias'];
// nomes.push(4);

/**
 * Arrays - Antiga Sintaxe
 */
const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);

// nums.push('teste');
console.log(nums[0]);

/**
 * Any
 */
const arr1: any = [1, 'teste', true, [], { nome: 'Nathália' }];
console.log(arr1);

arr1.push([1, 2, 3]);
console.log(arr1);

/**
 * Parametros tipados
 */
function soma(a: number, b: number) {
  console.log(a + b);
}
soma(4, 5);
// soma('a', 'b');

/**
 * Retorno da Função
 */
function greetings(name: string): string {
  // return 5;
  return `Olá ${name}`;
}
console.log(greetings('Nathália'));
// console.log(greetings(123));

/**
 * Função anônima
 */
setTimeout(() => {
  const sallary: number = 1000;
  // console.log(parseFloat(sallary));
  console.log(sallary);
}, 2000);

/**
 * Tipos de objetos
 */
function passCoordinates(coord: { x: number; y: number }) {
  console.log(`X coordinates: ${coord.x}`);
  console.log(`Y coordinates: ${coord.y}`);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);

// Incomum
const pessoaObj: { name: string; surname: string } = {
  name: 'Nathália',
  surname: 'Veneziano',
};

/**
 * Props opcionais
 */
function showNumbers(a: number, b: number, c: number) {
  console.log(`A: ${a}`);
  console.log(`B: ${b}`);

  if (c) {
    console.log(`C: ${c}`);
  }
}

showNumbers(1, 2, 3);
// showNumbers(4, 5);

/**
 * Validando argumento opcional
 */
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting('Nathália', 'Veneziano'));
console.log(advancedGreeting('Maria'));

/**
 * Union Types
 */
function showBalance(balance: number | string) {
  console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance('500');

const arr2: Array<number | string | boolean> = [1, 'teste', true];

/**
 * Avançando em Union Types
 */
function showUserRole(role: string | boolean) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado';
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole('Admin'));

/**
 * Type Alias
 */
type ID = number | string;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId('200');

/**
 * Interfaces
 */
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoords(coordObj);

/**
 * Interface x Type Alias
 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: 'Nathália', age: 36 };
console.log(somePerson);

// age como constante, não permitindo alterações
type personType = {
  name: string;
};

// type personType = {
//   age: number;
// };

/**
 * Literal types (delimita os valores aceitos)
 */
function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é: ${direction}`);
}

showDirection('left');
// showDirection('top');

/**
 * Non null assertion
 */
const p = document.getElementById('some-p');
console.log(p!.innerText);

/**
 * BigInt
 */
let n: bigint;
n = 1000n;
console.log(n);
console.log(typeof n);

/**
 * Symbol
 */
let symbolA: symbol = Symbol('a');
let symbolb = Symbol('a');

console.log(symbolA == symbolb);
console.log(symbolA === symbolb);
