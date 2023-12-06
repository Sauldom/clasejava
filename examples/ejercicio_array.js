// Paso 1: Crea un array vacío llamado "numeros"

// Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding

// Paso 3: Imprime el contenido del array "numeros" en la consola

// Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números

// Paso 5: Agrega el número 10 al inicio del array "numeros"

// Paso 6: Imprime el contenido del array "numeros" en la consola

// Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding

// Paso 8: Elimina la palabra keepcoding a partir del índice anterior

// Paso 9: Imprime el contenido del array "numeros" en la consola

// Paso 10: Imprime la longitud del array "numeros" en la consola

let numeros =[];

function add (lista){
    nueva_lista = [];
    for(let i=0 ; i<5; i++){
        if (i===3){
            nueva_lista.push('keepcoding'); 
        }
        nueva_lista.push(i+1);
    }
    return nueva_lista;
}

console.log (add(numeros));
numeros = add(numeros);
console.log(numeros);

//console.log(numeros.includes('keepcoding'));

if (numeros.includes('keepcoding')){
    console.log('Este array no tiene solo numeros');
}else{
    console.log('No tiene keepcondig');
}

numeros.unshift(10);

console.log(numeros);

console.log(numeros.indexOf('keepcoding'));

numeros.splice(numeros.indexOf('keepcoding'),1);
console.log(numeros);
console.log(numeros.length);
