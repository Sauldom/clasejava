/*Ejercicio: Conversor de temperaturas

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura (Celsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura:"
"Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"

Casos para probar:

Ingresa la temperatura 🌡: 0
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): K

La temperatura en Kelvin es: 273.15K

Ingresa la temperatura 🌡: 283.15
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): C

La temperatura en Celsius es: 10°C*/


let tempe=parseFloat(prompt ('Ingresa la temperatura: '));
while (isNaN(tempe)){
    console.log('El numero introducido no es un numero');
    tempe=parseFloat(prompt ('Ingresa la temperatura: '));  
}

let escal= prompt('Ingresa la escala a la que quieras cambiar tu temperatura (C o K); ').toUpperCase();
console.log(escal);
console.log(escal!='C');
while (escal !='C' && escal != 'K'){
    console.log('Tienes que introducir una C o una K');
    escal= prompt('Ingresa la escala a la que quieras cambiar tu temperatura (C o K); ').toUpperCase();
}

//console.log(parseFloat('numero'));


function temperatura(temperaturas, escalas){
    let tFinal = 0.0;
    if (escalas ==='K'){
        tFinal = temperaturas + 273.15;  
    }else {
        tFinal= temperaturas -273.15;
    }
    return tFinal;

}
console.log(`La temperatura es ${temperatura(tempe, escal)} en ${escal}`);






