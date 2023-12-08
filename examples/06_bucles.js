
console.log('Empezamos con bucles');

const fruits = [
    'apple',
    'banana',
    'kiwi',
    'watermelon',
    'orange'
];

for(let i =0; i< fruits.length ;i++){
    console.log(i);
    console.log(fruits[i].toUpperCase());
    fruits[i] === 'kiwi' ? console.log('****') : console.log(fruits[i]);
}

/* break - continue */
console.clear();
console.log('break - continue');

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (fruit.toLowerCase() === 'kiwi'){
        break;
    }else{
        console.log(fruit);
    }
    
}
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (fruit.toLowerCase() === 'kiwi'){
        continue;
    }else{
        console.log(fruit);
    }
    
}

let fruitsNoKiwi =[];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (fruit.toLowerCase() !== 'kiwi'){
        fruitsNoKiwi.push(fruit);
    }
}
console.clear();
console.log(fruits);
console.log(fruitsNoKiwi);
if(!fruitsNoKiwi.includes('kiwi')){
    console.log('Mariano feliz el de aqui no hay quien viva');
}


const matrix = [
    [1,2,3],
    [4,5,6,],
    [7,8,9,]
];

for (let index = 0; index < matrix.length; index++) {
    const rows = matrix[index];
    console.log(rows);
    for (let i = 0; i <rows.length;i++){
        console.log(rows[i]);
    }
    
}

/// while
console.clear();
let index = 0;
while (index <4){
    console.log('bucle while \n');
    index++;

}

prompt('Esto que es');

const presents = [];
while(true){
    const newPresent = prompt('Añadir un regalo: ');
    if (!newPresent){
        break;
    }
    presents.push(newPresent);
    console.log(`Lista de regalos ${presents.join(' ')}`);
}