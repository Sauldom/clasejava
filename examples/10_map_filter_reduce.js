

//manera de trabajar con los arrays

//funciones puras no modifica el estado global, arroja el mismo resultado con los mismos argumentos

const sumar = (a,b) => a+b;

console.log(sumar(1,2));
console.log(sumar(1,2));
console.log(sumar(1,2));


//esta seria un ejemplo forzado de una funcion impura
let num = 0;
const impuresumar = (num1, num2)=>{
    num += num1+num2;
    return num;
};

console.log(impuresumar(1,3));
console.log(impuresumar(1,3));
console.log(impuresumar(1,3));


const datos = [];
const addElement = (array, elemento)=>{
    const newArray = structuredClone(array);
    newArray.push(elemento);
    return newArray;
};

console.log(addElement(datos, 15));
console.log(addElement(datos, 13));
console.log(addElement(datos, 1));
/*
Inmutabilidad: implica que los datos deben de ser modificados una vez que se crean. en javascript se alienta
las estructuras de datos inmutables, lo que significa que se crean nuevas instancias en lugar de modificar las existentes*/

const user= {
    name: 'saul',
};

const user1 = structuredClone(user);
user1.role = 'admin';
console.log(user);
console.log(user1);

const numbers = [1,2,3,4,5,6];

let double = [];

const doubleList = (list)=>{
    let doubleArray = []
    for (let number of numbers){
        doubleArray.push(number*2);    
    }
    return doubleArray;
}

double = doubleList(numbers);
console.log(double);
/*map se ejecuta la funcion en cada posicion del array
el primer parametro es el elemento del array 
*/
const nuevoArray = numbers.map((param1)=>{
    console.log(param1);
    return param1*2;
});

console.log(nuevoArray);
console.clear();

const filter45 = (array)=>{
    const newList = [];
    for (let element of array){
        if(element !==4) newList.push(element);
    }
    return newList;
};

console.log(filter45(numbers));
console.log(numbers);

const newList =  numbers.filter((number)=>{
    return number !==4 && number!==3;
});
//const newList =  numbers.filter(number=> number!===4);
console.log(newList);

let numeros = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false];
const evenodd = (numbers) => {
    let pares = numbers.filter(numero=>{
        return typeof numero === 'number' && numero%2 ===0;
    });
    let impares = numbers.filter(numero=>{
        return typeof numero === 'number' && numero%2 !==0;
    });
    

    return {
        pares,
        impares
    }
}
console.log(evenodd(numeros));

const multiplicador = (primerValor)=> {
    return (item) =>{
        return item*primerValor;
    };
};

const multiplicadorX2 = multiplicador(2);
const multiplicadorX3 = multiplicador(3);
console.log(multiplicadorX2(4));

console.log(numbers.map(number => number*2));
//buscar un objeto dentro de un array 
const element = numbers.find((item)=>{
    return item ===2;
});
console.log(element);

//foreach recorre los elementos del array

numbers.forEach((item)=>{
    console.log(item);
});
//se van aplicando los metodos de izquierda a derecha
const resultado = numbers.filter (item=> item>3).map(item=>item*2);
console.log(resultado);