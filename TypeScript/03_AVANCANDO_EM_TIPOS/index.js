/**
 * Arrays - Nova Sintaxe
 */
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = 'teste';
var nomes = ['Nathália', 'Marias'];
// nomes.push(4);
/**
 * Arrays - Antiga Sintaxe
 */
var nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push('teste');
console.log(nums[0]);
/**
 * Any
 */
var arr1 = [1, 'teste', true, [], { nome: 'Nathália' }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
/**
 * Parametros tipados
 */
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma('a', 'b');
/**
 * Retorno da Função
 */
function greetings(name) {
    // return 5;
    return "Ol\u00E1 ".concat(name);
}
console.log(greetings('Nathália'));
// console.log(greetings(123));
/**
 * Função anônima
 */
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary));
    console.log(sallary);
}, 2000);
/**
 * Tipos de objetos
 */
function passCoordinates(coord) {
    console.log("X coordinates: ".concat(coord.x));
    console.log("Y coordinates: ".concat(coord.y));
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// Incomum
var pessoaObj = {
    name: 'Nathália',
    surname: 'Veneziano',
};
/**
 * Props opcionais
 */
function showNumbers(a, b, c) {
    console.log("A: ".concat(a));
    console.log("B: ".concat(b));
    if (c) {
        console.log("C: ".concat(c));
    }
}
showNumbers(1, 2, 3);
// showNumbers(4, 5);
/**
 * Validando argumento opcional
 */
function advancedGreeting(firstName, lastName) {
    if (lastName) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting('Nathália', 'Veneziano'));
console.log(advancedGreeting('Maria'));
/**
 * Union Types
 */
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance('500');
var arr2 = [1, 'teste', true];
/**
 * Avançando em Union Types
 */
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado';
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId('200');
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
var somePerson = { name: 'Nathália', age: 36 };
console.log(somePerson);
// type personType = {
//   age: number;
// };
/**
 * Literal types (delimita os valores aceitos)
 */
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection('left');
// showDirection('top');
/**
 * Non null assertion
 */
var p = document.getElementById('some-p');
console.log(p.innerText);
/**
 * BigInt
 */
var n;
n = 1000n;
console.log(n);
console.log(typeof n);
/**
 * Symbol
 */
var symbolA = Symbol('a');
var symbolb = Symbol('a');
console.log(symbolA == symbolb);
console.log(symbolA === symbolb);
