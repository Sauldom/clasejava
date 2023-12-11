console.log('Objects');

/*
//producto

const precio = 190;
const name ='Air jordan';
const stock = null;


//producto 2

const precio = 20;
const name ='declaton';
const stock = 1000;

vamos a resumir esto por ejemplo

*/

// const producto = new Object();

const prodcutoEstrella ={
    name:  'Air jordan',
    precio: 123,
    stock: null,
    //name: 'test',
    //precio: 12

}
//podemos pisar las propiedaddes del objeto es un dict en este caso
console.log(prodcutoEstrella);

const fordMustang = {
    brand: 'ford',
    year:1969,
    model:'Mustang',
    firstOwner:'',
    stock:null,
    country:{
        name:'Usa',
        code:'us'
    },
    owners:['saul', 'elon', 'otro'],

}
const cars = [
    fordMustang
];

console.log(cars);


const paginadeProducto = `
Producto ${fordMustang.brand}
Año ${fordMustang.year}
Model ${fordMustang.model}
country ${fordMustang.country}

Owners ${fordMustang.owners.join(' | ')}
`;
console.log(paginadeProducto);

console.log(fordMustang['firstOwner']);
console.log(fordMustang['year']);
console.log(fordMustang['elon']);

/*const key = prompt('Que info quieres saber del forMustang?');
if (key ==='year'){
    console.log(fordMustang.year);
}else if (key === 'model'){
    console.log(fordMustang.model);

}
*/
//console.log(fordMustang[key]);

const keyId = 'newKey';
const coche ={
    title: 'Car1',
    year: 1990,
    newKey: 12
};
console.log(coche);
console.log(coche[keyId]);
//para cambiar un elemento podemos acceder directamente a la key
coche.title = 'Car 2';
console.log(coche);
//por ejemplo asignando aplicando un metodo
coche.title = coche.title.toUpperCase();
console.log(coche.title);

console.clear();
//borrar un elemento
delete coche.year;
console.log(coche);


//podemos tener un array de objetos

const shows = [
    {
        id:1,
        name: 'Under the dome',
        genres: ['Drama', 'sci-fi', 'thriller']
    },
    {
        id:2,
        name: 'Under the 2',
        genres: ['Drama', 'fantasy', 'thriller']
    }
]

console.log(shows[0].genres.join(' || '));

let showTemplate ='';
for (let index = 0; index < shows.length; index++) {
    const show = shows[index];
    showTemplate = showTemplate + `
    <h2> ${show.name}</h2>
    <p>${show.genres.join('  ----  ')}
`;
    
}
document.write(showTemplate);

/// Object.keys   objet.values, Object.entries,  for..in, JSON

const stringValue = JSON.stringify(shows);
const showsCopy = shows;
console.log(showsCopy===shows);
console.log(stringValue);

const parseArray = JSON.parse(stringValue);
console.log(parseArray);

//par borrar podrias cambiar un propiedad a undefined y pasarlo a stringfy y luego a parse
//JSO.parse(stringify(coche)) ---  y borraria todos los keys undefined

console.log(`Keys ${Object.keys(shows[0])}`);
//nos devuelve las keys sin los valores

console.log(`Values ${Object.values(shows[0])}`);

console.log (`Entries ${Object.entries(shows[0])}`);

console.log (`Entries ${Object.entries(shows)}`);

//for..in recorre cada una de las keys y ahi ya podemos hacer lo que queramos, mostrar fs, cambiar valores, salidas

for (let key in shows[1]){
    console.log(key);
    console.log(shows[1][key]);
}

