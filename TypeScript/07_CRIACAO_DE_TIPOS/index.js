/**
 * Generics
 */
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData(['teste']));
/**
 * Constraint em generic
 */
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: 'Porta', cor: 'Branca' };
console.log(showProductName(myObj));
var otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
console.log(showProductName(otherProduct));
var thirdObj = { price: 19.99, category: 'Roupa' };
var myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
var myPen = {
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
function getSomeKey(obj, key) {
    return "A chave ".concat(String(key), " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: '2TB',
    ram: '32gb',
};
console.log(getSomeKey(server, 'ram'));
function showCharacterName(obj, key) {
    return "".concat(obj[key]);
}
var myCharacter = {
    name: 'Nathália',
    age: 36,
    hasDriveLicense: true,
};
console.log(showCharacterName(myCharacter, 'name'));
console.log(showCharacterName(myCharacter, 'age'));
/**
 * typeof type operator
 */
var userName = 'Nathália';
var userName2 = 'Maria';
var userName4 = 'Claudia';
var newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga',
};
function showKM(km) {
    console.log("O ve\u00EDculo tem a km de: ".concat(km));
}
showKM(newTruck.km);
var newCar = {
    km: 5000,
    kg: 1000,
};
showKM(newCar.km);
var someVar = 5;
var testing = 'some text';
