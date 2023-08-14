/**
 * Numbers
 */
let x: number = 10;
console.log(x);

x = 16;
console.log(typeof x);

const y: number = 15.584848;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));

/**
 * String
 */
const firstName: string = 'Nathália';
console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = 'Veneziano';

fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName);

/**
 * Boolean
 */
let a: boolean = false;
console.log(a);
console.log(typeof a);

a = true;
console.log(a);

/**
 * Inference e Annotation
 */
let ann: string = 'Teste';
let inf = 'Teste';

// ann = 1;
// inf = 1;
