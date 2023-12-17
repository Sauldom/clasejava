


///declarar funciones

function saludo (){
    console.log('Hola, señor');
}

saludo();

function esMayorEdad(age, name){
    
    if (age >= 18) {
    console.log(`${name} tienes ${age} años eres mayor de edad`);
    } else if (age >= 14) {
    console.log(`${name} tienes ${age} añosEres un adolescente`);
    } else {
    console.log(`No eres mayor de edad ni adolescente`);
    }
}

function esMayorEdad2(age){
    return age>=18;
    /*if (age >= 18) {
        return true;
    }else {
        return false;
    }*/
}
esMayorEdad(10);

function displayUser(name){
    console.log(`${name}, es mayor de edad ya puede hacer cosas como registrarse`);

}

const users =[
    {
        name:'user1',
        age:30,
    },
    {
        name:'user2',
        age:10,
    },{
        name:'user3',
        age:12,
    },{
        name:'user4',
        age:45,
    },

]

for (let{age, name} of users){
    esMayorEdad(age,name)
}

for (let {age, name} of users){
    if (esMayorEdad2(age)){
        displayUser(name);
    }
}
//podemos inicializarlos en la defincion para que tenga esos parametros por defecto.
function sum(num1 = 0, num2=0){
    return num1+num2;
}
//si no le pongo valores por defecto me lo ponen como un Nan
console.log(sum());
console.log(sum(2,3));
const suma = function (value1=0, value2=0, value3=0){
    return value1 + value2 + value3;
}
console.log(suma(2,3));

const crearSaludo = function (nombre){

    return `Hola ${nombre}`;
}

console.log(crearSaludo('Saul'));
//si pones crearSaludo sin parentesis te devuelve la funcion en si
const sal = crearSaludo('juan');
console.log(sal);

/*arrow function =>
///por defecto tienen un return implicito
const sumArrow = (value1=0, value2=0, value3=0) =>{
    return value1+value2+value3;
}
//const sumArrow = (value1=0, value2=0, value3=0) =>value1+value2+value3*/
//console.log(sumArrow(4,3,4));

const userInfor = () =>(
{
    name:'saul',
    role:'admin',
}

);

console.log(userInfor());
//this function vs arrow

const obj ={
    value: 20,
    noArrow:function (){
        console.log('No arrow function', this.value);
        function insideFunction (){
            console.log('Inside function', this.value);
        }
    insideFunction();
    }
}
console.log(obj.value);

console.log(obj.noArrow());

//crea un  lista con todo lo que hay en los parametros
const sumArrow = (...params) => {
    let array=params;
    console.log(params);
    console.log('es un array ', array);
}

console.log(sumArrow(1,2,2,4));

const adminUser = {
    name: 'saul',
    role:'admin',
    password: 'pass123',
    courses: [],
    age: 43
};
//evitar uno de los parametros
const getUserInfo = ({password, ...otrasProps})=> otrasProps;
    

const adminInfo =  getUserInfo(adminUser);
console.log(adminUser);
console.log (`Usuario name ${JSON.stringify(adminInfo)}`);

//cierres
const counter = () =>{
    let count =0;
    const increment =()=>{
        count +=1;
    };
    const getCount = ()=>{
        return count
    }
    return {increment,getCount};
};
console.clear();
const counterBreak = counter();
counterBreak.increment();
counterBreak.increment();
counterBreak.increment();
counterBreak.increment();
const counterNextClasss=counter();
counterNextClasss.increment();
console.log(counterBreak.getCount());
console.log(counterNextClasss.getCount());


//pasar como parametro una funcion

const foo = (param) =>{
    param();
};

const realizarOperacion = (num1, num2, operacion)=>{
    return operacion (num1,num2);
};

const sumatorio = (num1, num2) => num1+num2;
const dividir = (num1, num2) => num1/num2;

realizarOperacion2(5,2, function(param1, param2){
    return param1*param2;
});
/*realizarOperacion 3(5,2 (param1, param2)=>{
    return param1*param2;
});*/
console.log(realizarOperacion (5,2, dividir));

