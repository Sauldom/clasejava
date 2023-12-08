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