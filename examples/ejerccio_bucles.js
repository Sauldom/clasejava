/*Enunciado: Dada una lista de números, crea dos nuevas listas, 
na que contenga solo los números impares de la lista original y la otra los pares. 
Cuidado que la lista puede no contener números.

Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false*/

let listaNum= [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false];

let listaPar=[];
let listaImpar=[];

for (i=0; i<listaNum.length; i++){
    if (typeof listaNum[i] ==='number'){
        if (listaNum[i]%2 ===0){
            listaPar.push(listaNum[i]);
        }else{
            listaImpar.push(listaNum[i]);
        }

    }
}
console.log (`La lista original es ${listaNum}`);
console.log(`La lista de impares es ${listaImpar}`);
console.log(`La lista de pares es ${listaPar}`);

const arbolNavidad = [
    ['-','-','*','-','-'],
    ['-','*','*','*','-'],
    ['*','*','*','*','*']
]


for(i=0;i<arbolNavidad.length;i++){
    const row = arbolNavidad[i];
    
    let filaArbol='';
    for (j=0; j<row.length;j++){
        filaArbol += row[j];
    }
    console.log(filaArbol);
}

//crear arbol navidad
function crearArbol(altura){
    let arbol = '';
    altura = parseInt(altura);
    anchura = (parseInt(altura)*2)-1;
    console.log(`La altura es ${altura} y la anchura es ${anchura}`);
    
    for(let i = 0; i<altura ;i++){        
        for (let j =0; j<anchura; j++){            
            let empieza= (((anchura-1)/2)-i);
            let acaba = (((anchura-1)/2)+i);
            //console.log(`empieza ${empieza}`);
            //console.log(`acaba ${acaba}`);
            if (empieza>j || j>acaba){
                arbol += '-'
            }else{
                arbol+= '*';
            }
        }
        arbol = arbol + '\n';
    }
    
    
    return arbol;
}

function ponerBolas(arbol, altura){
    const bola= '*';
    for (i=0; i<arbol.length; i++){
        const row = arbol[i];
        for (let j=row.length; j>=0;j--){
            row[j] = bola;
        }

    }
    return arbol;
}
arbol = crearArbol(3);
console.log(arbol);
arbol2 = crearArbol(4);
console.log(arbol2);
arbol3 = crearArbol(6);
console.log(arbol3);

//console.clear();

/* Piedra papel tijera

Vamos a preguntar al usuario su jugada, que tiene que ser "piedra", "papel" o "tijera"

- Si no es ninguna mostrar un mensaje de "opción incorrecta"
- Si el usuario quiere salir que escriba "salir"
- El rival siempre va a tener piedra
- Implementar la lógica
  - "Ganaste tu tienes papel y el rival piedra"
  - "Perdiste tu tienes tijeras y el rival piedra"
  - "Empate ambos tienen piedra"*/



let jugador =''; 
const jugadas = ['piedra', 'papel', 'tijera'];

maquina = 'piedra';


while (true){
    jugador =prompt('Elige tu jugada piedra, papel o tijera, si quieres salir escribe salir: ');
    if (jugador!== null){
        jugador = jugador.toLowerCase();

    }
    if (jugador === 'salir'){
        break;
    }
    if (jugadas.includes(jugador)){
        if (jugador ===maquina){
            console.log(`Hay un empate jugador con : ${jugador} y maquina con ${maquina}`);
        } else if (jugador ==='papel'){
            console.log(`jugador gana con ${jugador} y maquina con ${maquina}`);
        }else{
            console.log(`El jugador pierde con ${jugador} contra maquina ${maquina}`);
        }


    }else{
        console.log('Opcion incorrecta')
    }

}



