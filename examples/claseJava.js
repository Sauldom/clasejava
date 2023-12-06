console.log("hola");

//variables

var num1=5;

var num2=7;

//let y const

let age=43;
const edadLegal=18;

//const no te deja asignar un segundo valor daria error es un valor constante

/*Ejercicio 2: Crea y muestra el tipo de estas variables:

Años: 60;
Jugador: Jordan;
Dorsal: 23;
Pertenece al salon de la fama: Sí
Equipo actual: ninguno

Y muestra un mensaje como este

"Soy Jordan de 35 años ahora mi equipo es: ninguno"*/

let años = 60;
let jugador = 'Jordan';
let dorsal = 23;
let fameHall=true;
let team ='';

console.log(`Soy ${jugador} de ${años} ahora mi equipo es: ${team}`);
console.log(`años: ${typeof años}  
            jugador:${typeof jugador} 
            dorsal: ${typeof dorsal} 
            fameHall: ${typeof fameHall}    
            team: ${typeof team}`);

            //en los templetes puedes meter funciones
