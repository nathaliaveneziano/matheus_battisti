"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * importacao de arquivos
 */
var greet_1 = require("./greet");
(0, greet_1.default)();
console.log('----------------------------------------------------------------');
/**
 * import de variável
 */
var variable_1 = require("./variable");
console.log(variable_1.x);
console.log('----------------------------------------------------------------');
/**
 * múltiplas importações
 */
var multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
console.log('----------------------------------------------------------------');
/**
 * alias
 */
var changeName_1 = require("./changeName");
console.log(changeName_1.someName);
console.log('----------------------------------------------------------------');
/**
 * importando tudo
 */
var myNumbers = require("./numbers");
console.log(myNumbers);
var nX = myNumbers.n1;
console.log(nX);
myNumbers.showNumber();
console.log('----------------------------------------------------------------');
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var claudia = new User('Claudia', 57);
console.log(claudia);
console.log('----------------------------------------------------------------');
