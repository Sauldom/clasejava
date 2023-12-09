

/* casi todo son objetos y se definen como si fuera un diccionario
pueden contener variables o metodos

*/

let person = 
{
    nombre: function(){
        return 'Saul'
    }

};
console.log(person.nombre());


let person2 ={
    nombre: 'saul',
    apellidos: 'dominguez',
    getNombre: function(){
        return `${this.nombre}  ${this.apellidos}`
    }
}

console.log(person2.getNombre());

//this nos da un referencia a person


//metodo constructor, hace una plantilla

function Jugador (nombre,posicion){
    this.nombre = nombre;
    this.posicion = posicion;
    this.getInfo = function(){
        return `Mi nombre es ${this.nombre} y juego de ${this.posicion}`;
    }

}
//tienes que crearlo con new los constructores se crean con la primera en mayusculas
let jugador1= new Jugador('Saul', 'centro');

console.log(jugador1);

console.log(jugador1.getInfo());

let jugador2 = new Jugador('Aida', 'delantero');

console.log(jugador2.getInfo());


//Crear un objeto que recibe como parametros un nombre, un apellido y un nmero de telefono y tengas dos meto
// uno con una fase moestrando los 3 atributos y otro mostrando solo la direccicon

function Person(nombre, apellidos, telefono, direccion){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.direccion = direccion;
    this.getInfo = function(){
        return `El nombre es ${this.nombre}, los apellidos son ${this.apellidos} y el telefono es ${this.telefono} calle ${this.direccion}`;
    }
    this.getPhone = function(){
        return `El telefono es ${this.telefono}`;
    }
    this.getDireccion = function(portal){
        return `La direccion es ${this.direccion} portal numero ${portal}`
    }
}

let person1= new Person('Saul', 'Dominguez Bermejo', 667077645, 'Paseo los frailes');

console.log(person1.getInfo());
console.log(person1.getPhone());
console.log(person1.getDireccion(12));

/*const lista_jugada = ['piedra', 'papel', 'tijera'];
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
*/
//reescribir el juego de piedra papel o tijera para que devuelva un string y con objetos
const game = (player1, player2)=>{
    if(player1===player2) return 'Empate';
    var reglas ={
        piedra:'tijeras',
        papel:'piedra',
        tijera:'papel'
    };
    if (player2===reglas[player1]){
        return 'Player1 gana';
    }else{
        return 'Player2 gana';
    }
}

function Player(nombre){
    let actions = ['piedra', 'papel', 'tijera'];
    this.nombre = nombre;
    this.play = function (){

    }
}
console.log(game('piedra', 'papel'));
