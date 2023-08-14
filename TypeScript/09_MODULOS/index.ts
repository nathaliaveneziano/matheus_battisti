/**
 * importacao de arquivos
 */
import importGreet from './greet';

importGreet();
console.log('----------------------------------------------------------------');

/**
 * import de variável
 */
import { x } from './variable';
console.log(x);
console.log('----------------------------------------------------------------');

/**
 * múltiplas importações
 */
import { a, b, myFunction } from './multiple';
console.log(a);
console.log(b);
myFunction();
console.log('----------------------------------------------------------------');

/**
 * alias
 */
import { someName as name } from './changeName';
console.log(name);
console.log('----------------------------------------------------------------');

/**
 * importando tudo
 */
import * as myNumbers from './numbers';
console.log(myNumbers);

const nX = myNumbers.n1;
console.log(nX);
myNumbers.showNumber();
console.log('----------------------------------------------------------------');

/**
 * importando tipos
 */
import { Human } from './myTypes';

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const claudia = new User('Claudia', 57);
console.log(claudia);

console.log('----------------------------------------------------------------');
