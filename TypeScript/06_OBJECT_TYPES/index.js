function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 de R$").concat(product.price));
    if (product.isAvailable) {
        console.log('O produto está disponível!');
    }
}
var shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(user.role));
    }
}
var u1 = { email: 'nathalia@email.com', role: 'Admin' };
var u2 = { email: 'maria@email.com' };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: 'VW',
    wheels: 4,
};
console.log(fusca);
var coords = {
    x: 10,
};
coords.y = 15;
// coords.z = 'teste';
console.log(coords);
var nathalia = {
    name: 'Nathália',
    age: 36,
};
console.log(nathalia);
var goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehamaha', 'Genki Dama'],
};
console.log(goku);
console.log(goku.superpowers[1]);
var arnold = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
/**
 * Readonly array
 */
var myArray = ['Maçã', 'Laranja', 'Banana'];
// myArray[3] = 'Mamão';
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: ".concat(item));
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
var myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5];
console.log(myNumberArray);
var anotherUser = ['Nathália', 36];
console.log(anotherUser);
console.log(anotherUser[0]);
anotherUser[0] = 'Maria';
console.log(anotherUser[0]);
/**
 * Tuplas com readonly
 */
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
