var firstName = 'Nathália';
var anotherName = 1;
var x = true;
function greetings(name) {
    console.log("Ol\u00E1 ".concat(name));
}
greetings(firstName);
greetings(anotherName);
greetings(x);
