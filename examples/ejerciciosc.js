
let persona = {
    nombre: 'Saul',
    apellido: 'Dominguez',
    direccion: {
        calle: 'los frailes',
        numero: 12
    },
    array:[1,2,3]
};

function saludar (){
    return `Hola ${persona.nombre} ${persona.apellido} 
    vives en calle ${persona.direccion.calle} con numero ${persona.direccion.numero}
    y hay un array ${persona.array}
    que bien puede ser ${persona.array[1]}`;


}
console.log(saludar());

let dict = {
    nombre: 'Saul',
    apellido: 'Dominguez',
    direccion: {
        calle: 'los frailes'
    }
}

function contarPropiedades(){
    let aux=0;
    for (key in dict){
        aux++;
    }
    return aux;
}
console.log(contarPropiedades());

//crear una funcion que recibiendo dos diccionarios como aprametros nos devuelva un unico
//diccionario con las clave y los valores de los dos recibidos

let dic_1 = {
    clave1:1,
    clave2:2,
    clave3:3
}

let dic_2 = {
    clave4:4,
    clave5:5,
    clave6:6
}

function juntadic(dicA, dicB){
    let dic = {}
    for(let key in dicA){
        dic[key] = dicA[key];
    }
    for(let key in dicB){
        dic[key] = dicB[key];
    }
    return dic;
}

console.log (juntadic(dic_1, dic_2));

//crear un metodo para jugar a piedra papel o tijera y nos indique el ganador

const lista_jugada = ['piedra', 'papel', 'tijera'];
const reglas = {
    piedra:"tijera",
    papel:"piedra",
    tijera:"papel"
};
console.group(Math.floor(Math.random() * 3));

function jugada (list){
    let play = '';
    let numPlay = Math.floor((Math.random()*list.length));
    return play = list[numPlay];
}


let player1= jugada(lista_jugada);
console.log(player1);

let player2= jugada(lista_jugada);
console.log(player2);

if (player1 === player2){
    console.log(`Hay un empate player1 con ${player1} y player2 con ${player2}`);
}else if(player2===reglas[player1] ){
    console.log(`Gana player1 con ${player1} y player2 con ${player2}`);
}else{
    console.log(`Gana player2 con ${player2} y player1 con ${player1}`);
}
