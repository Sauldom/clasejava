
 
const username = 'Saul';
const password = '    23     ';



if (password.trim().length <3){
    console.log('Pass no valida');
}

const precio=2;

//console.log(precio.length); - es undefined
console.log(username.length); //longitud del string

console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(password.trim()); // quita espacios por delante y espacios por detras

const email = 'saul.vau@gmail.com';

console.log(email.toLowerCase().trim());
console.log(email.includes('@gmail.com'));//mira si lo incluye en un string

console.log(username.replace('Saul', 'Aida'));/// reemplaza una por otra hay otro metodo que es replace all que cambia todas las ocurrencias
console.log(email.endsWith('es'));//ends starst true o false si empeza o acaba con ello
