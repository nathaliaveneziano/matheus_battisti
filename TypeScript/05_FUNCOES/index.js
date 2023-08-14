var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * void
 */
function withoutReturn() {
    console.log('Essa função não tem retorno!');
}
withoutReturn();
/**
 * Callback como argumento
 */
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, userNmae) {
    console.log('Preparando a função!');
    var greet = f(userNmae);
    console.log(greet);
}
preGreeting(greeting, 'Nathália');
preGreeting(greeting, 'Maria');
/**
 * Generic Function
 */
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: 'Nathália' }, { age: 36, jpb: 'Programmer' });
console.log(newObject);
/**
 * Constraints
 */
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
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
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
/**
 * Parametros opcionais
 */
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem?");
}
console.log(modernGreeting('Nathália'));
console.log(modernGreeting('Pedro', 'Dr.'));
/**
 * Parametro default
 */
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 15));
/**
 * unknown
 */
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
}
doSomething([1, 2, 3]);
doSomething(5);
/**
 * Never
 */
function showErrorMessage(message) {
    throw new Error(message);
}
// showErrorMessage('Algum erro');
/**
 * rest operator
 */
function sumALl() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumALl(1, 2, 3, 4, 5));
console.log(sumALl(5, 348, 2348));
/**
 * destructuring operator
 */
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e ele custo R$").concat(price);
}
var shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
