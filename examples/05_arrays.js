

//creacion de arrays

let fruits = ['apple', 'banana', 'kiwi'];

//let fruits = new Array();
console.log(typeof fruits);
console.log(fruits);

console.log(fruits[0]);

fruits.push('watermelon');

console.log(fruits);

fruits.pop();

console.log(fruits);
fruits.push('watermelon');
const index = fruits.indexOf('kiwi');  /// si no lo encuentra devuelve un -1
console.log(index);

fruits.splice(index, 1);
console.log(fruits);

const presents = ['TV', 'PS5'];
const shoppginbag = fruits.concat(presents, presents);

console.log(shoppginbag);// .reverse
console.log(shoppginbag.reverse());
console.log(shoppginbag.sort());
// tienes filter map reduce

console.log(shoppginbag.includes('TV'));

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][1]);
console.log(matrix[1].join('$$')); // te saca o elementos de un array con separadores o no
console.log(matrix[0].join(' $ '));
